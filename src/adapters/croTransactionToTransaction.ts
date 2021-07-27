import {
  CryptoName,
  CryptoTransaction,
  RawTransaction,
  TransactionKind,
  TransactionType,
} from "../../types";
import {
  getCryptoBySymbol,
  utcStringToTimestamp,
} from "../utils/typeConversions";
import { createGuid } from "../utils/utils";

const mapTransactionType = (input: TransactionKind): TransactionType => {
  switch (input) {
    case TransactionKind.crypto_deposit:
    case TransactionKind.crypto_purchase:
    case TransactionKind.van_purchase:
    case TransactionKind.referral_bonus:
    case TransactionKind.referral_card_cashback:
    case TransactionKind.dust_conversion_credited:
    case TransactionKind.crypto_earn_interest_paid:
    case TransactionKind.exchange_to_crypto_transfer:
    case TransactionKind.mco_stake_reward:
    case TransactionKind.reimbursement:
    case TransactionKind.supercharger_withdrawal:
    case TransactionKind.referral_gift:
    case TransactionKind.lockup_swap_credited:
    case TransactionKind.gift_card_reward:
    case TransactionKind.dynamic_coin_swap_credited:
    case TransactionKind.interest_swap_credited:
    case TransactionKind.crypto_wallet_swap_credited:
    case TransactionKind.viban_purchase:
    case TransactionKind.invest_withdrawal:
    case TransactionKind.transfer_cashback:
    case TransactionKind.lockup_swap_rebate:
    case TransactionKind.admin_wallet_credited:
    case TransactionKind.crypto_credit_loan_credited:
    case TransactionKind.recurring_buy_order:
    case TransactionKind.pay_checkout_reward:
    case TransactionKind.campaign_reward:
    case TransactionKind.staking_reward:
    case TransactionKind.xfers_purchase:
    case TransactionKind.crypto_earn_extra_interest_paid:
    case TransactionKind.dynamic_coin_swap_bonus_earn_deposit:
    case TransactionKind.dynamic_coin_swap_bonus_exchange_deposit:
    case TransactionKind.supercharger_deposit:
    case TransactionKind.invest_deposit: {
      return TransactionType.purchase;
    }

    case TransactionKind.crypto_to_van_sell_order:
    case TransactionKind.dust_conversion_debited:
    case TransactionKind.card_cashback_reverted:
    case TransactionKind.crypto_to_exchange_transfer:
    case TransactionKind.airdrop_to_exchange_transfer:
    case TransactionKind.cro_airdrop_adjusted:
    case TransactionKind.crypto_transfer:
    case TransactionKind.crypto_withdrawal:
    case TransactionKind.lockup_swap_debited:
    case TransactionKind.dynamic_coin_swap_debited:
    case TransactionKind.crypto_wallet_swap_debited:
    case TransactionKind.crypto_viban_exchange:
    case TransactionKind.reimbursement_reverted:
    case TransactionKind.card_top_up:
    case TransactionKind.interest_swap_debited:
    case TransactionKind.crypto_credit_program_created:

    case TransactionKind.crypto_payment: {
      return TransactionType.sale;
    }
    case TransactionKind.crypto_exchange: {
      return TransactionType.exchange;
    }
    case TransactionKind.crypto_earn_program_created:
    case TransactionKind.crypto_earn_program_withdrawn:
    case TransactionKind.lockup_lock:
    case TransactionKind.lockup_upgrade:
    case TransactionKind.lockup_unlock:
    case TransactionKind.airdrop_locked:
      return TransactionType.other;
    default:
      return TransactionType.unknown;
  }
};

const isMoneyPurchase = (input: RawTransaction) =>
  [
    TransactionKind.van_purchase,
    TransactionKind.viban_purchase,
    TransactionKind.recurring_buy_order,
    TransactionKind.xfers_purchase,
    // crypto-purchase doesn't belong here
  ].includes(input["Transaction Kind"]);

const getTransactionAmount = (input: RawTransaction): number => {
  if (isMoneyPurchase(input)) {
    return parseFloat(input["To Amount"]);
  }

  return parseFloat(input["Amount"]);
};

const getCrypto = (input: RawTransaction): CryptoName => {
  if (isMoneyPurchase(input)) {
    return getCryptoBySymbol(input["To Currency"]);
  }

  return getCryptoBySymbol(input.Currency);
};

const transform = (input: RawTransaction): Array<CryptoTransaction> => {
  const transaction: CryptoTransaction = {} as CryptoTransaction;
  transaction.type = mapTransactionType(input["Transaction Kind"]);

  if (transaction.type === TransactionType.other) return [];

  transaction.rawType = input["Transaction Kind"];
  transaction.timestamp = utcStringToTimestamp(input["Timestamp (UTC)"]);
  transaction.description = input["Transaction Description"];

  transaction.currency = input["Native Currency"];
  // Quantity Purchased
  transaction.amount = getTransactionAmount(input);
  // Price of transaction inUSD
  transaction.transactionAmountUSD = parseFloat(
    input["Native Amount (in USD)"]
  );
  // Price of transaction in native currency (USD, EUR)
  transaction.transactionAmount = parseFloat(input["Native Amount"]);
  transaction.pricePerUnit = Math.abs(
    transaction.transactionAmount / transaction.amount
  );
  /**
   * This used to be
   *
   * transaction.costBasis =
    !isMoneyPurchase(input) &&
    transaction.rawType !== TransactionKind.crypto_purchase
      ? 0
      : transaction.amount * transaction.pricePerUnit;

      but it was breaking overall change.... I think
   */
  transaction.costBasis = !isMoneyPurchase(input)
    ? transaction.amount * transaction.pricePerUnit
    : 0;

  transaction.id = createGuid();
  transaction.crypto = getCrypto(input);
  transaction.label = transaction.crypto.label;
  transaction.symbol = transaction.crypto.symbol;
  transaction.coin = transaction.crypto.symbol;

  if (transaction.type !== TransactionType.exchange) {
    return [transaction];
  }

  const splitTransaction: CryptoTransaction = { ...transaction };
  // Turn original transaction into a sale
  transaction.type = TransactionType["exchange-sale"];
  transaction.transactionAmount = 0 - transaction.transactionAmount;
  transaction.transactionAmountUSD = 0 - transaction.transactionAmountUSD;
  // Create Purchase
  splitTransaction.type = TransactionType["exchange-purchase"];
  // Quantity purchased
  splitTransaction.amount = parseFloat(input["To Amount"]!);
  splitTransaction.pricePerUnit = Math.abs(
    splitTransaction.transactionAmount / splitTransaction.amount
  );
  splitTransaction.costBasis =
    splitTransaction.amount * splitTransaction.pricePerUnit;
  splitTransaction.crypto = getCryptoBySymbol(input["To Currency"]);
  splitTransaction.label = splitTransaction.crypto.label;
  splitTransaction.coin = splitTransaction.crypto.symbol;
  splitTransaction.symbol = splitTransaction.crypto.symbol;
  splitTransaction.id = createGuid();

  return [splitTransaction, transaction];
};

export default transform;
