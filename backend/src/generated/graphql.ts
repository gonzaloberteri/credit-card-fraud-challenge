/* eslint-disable */
import { GraphQLClient, RequestOptions } from 'graphql-request';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  jsonb: { input: Record<string, any>; output: Record<string, any> };
  numeric: { input: number; output: number };
  timestamptz: { input: string; output: string };
  uuid: { input: string; output: string };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "audit_flags" */
export type AuditFlags = {
  __typename?: 'audit_flags';
  /** An object relationship */
  auditor: Users;
  auditor_id: Scalars['uuid']['output'];
  created_at: Maybe<Scalars['timestamptz']['output']>;
  flag_type: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  notes: Maybe<Scalars['String']['output']>;
  severity: Scalars['String']['output'];
  status: Scalars['String']['output'];
  /** An object relationship */
  transaction: Transactions;
  transaction_id: Scalars['uuid']['output'];
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "audit_flags" */
export type AuditFlagsAggregate = {
  __typename?: 'audit_flags_aggregate';
  aggregate: Maybe<AuditFlagsAggregateFields>;
  nodes: Array<AuditFlags>;
};

export type AuditFlagsAggregateBoolExp = {
  count?: InputMaybe<AuditFlagsAggregateBoolExpCount>;
};

export type AuditFlagsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AuditFlagsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuditFlagsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "audit_flags" */
export type AuditFlagsAggregateFields = {
  __typename?: 'audit_flags_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<AuditFlagsMaxFields>;
  min: Maybe<AuditFlagsMinFields>;
};

/** aggregate fields of "audit_flags" */
export type AuditFlagsAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<AuditFlagsSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "audit_flags" */
export type AuditFlagsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuditFlagsMaxOrderBy>;
  min?: InputMaybe<AuditFlagsMinOrderBy>;
};

/** input type for inserting array relation for remote table "audit_flags" */
export type AuditFlagsArrRelInsertInput = {
  data: Array<AuditFlagsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuditFlagsOnConflict>;
};

/** Boolean expression to filter rows from the table "audit_flags". All fields are combined with a logical 'AND'. */
export type AuditFlagsBoolExp = {
  _and?: InputMaybe<Array<AuditFlagsBoolExp>>;
  _not?: InputMaybe<AuditFlagsBoolExp>;
  _or?: InputMaybe<Array<AuditFlagsBoolExp>>;
  auditor?: InputMaybe<UsersBoolExp>;
  auditor_id?: InputMaybe<UuidComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  flag_type?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  notes?: InputMaybe<StringComparisonExp>;
  severity?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  transaction?: InputMaybe<TransactionsBoolExp>;
  transaction_id?: InputMaybe<UuidComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "audit_flags" */
export enum AuditFlagsConstraint {
  /** unique or primary key constraint on columns "id" */
  AUDIT_FLAGS_PKEY = 'audit_flags_pkey',
}

/** input type for inserting data into table "audit_flags" */
export type AuditFlagsInsertInput = {
  auditor?: InputMaybe<UsersObjRelInsertInput>;
  auditor_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  flag_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  severity?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<TransactionsObjRelInsertInput>;
  transaction_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type AuditFlagsMaxFields = {
  __typename?: 'audit_flags_max_fields';
  auditor_id: Maybe<Scalars['uuid']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  flag_type: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  notes: Maybe<Scalars['String']['output']>;
  severity: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  transaction_id: Maybe<Scalars['uuid']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "audit_flags" */
export type AuditFlagsMaxOrderBy = {
  auditor_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  flag_type?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  notes?: InputMaybe<OrderBy>;
  severity?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  transaction_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AuditFlagsMinFields = {
  __typename?: 'audit_flags_min_fields';
  auditor_id: Maybe<Scalars['uuid']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  flag_type: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  notes: Maybe<Scalars['String']['output']>;
  severity: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  transaction_id: Maybe<Scalars['uuid']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "audit_flags" */
export type AuditFlagsMinOrderBy = {
  auditor_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  flag_type?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  notes?: InputMaybe<OrderBy>;
  severity?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  transaction_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "audit_flags" */
export type AuditFlagsMutationResponse = {
  __typename?: 'audit_flags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuditFlags>;
};

/** on_conflict condition type for table "audit_flags" */
export type AuditFlagsOnConflict = {
  constraint: AuditFlagsConstraint;
  update_columns?: Array<AuditFlagsUpdateColumn>;
  where?: InputMaybe<AuditFlagsBoolExp>;
};

/** Ordering options when selecting data from "audit_flags". */
export type AuditFlagsOrderBy = {
  auditor?: InputMaybe<UsersOrderBy>;
  auditor_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  flag_type?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  notes?: InputMaybe<OrderBy>;
  severity?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  transaction?: InputMaybe<TransactionsOrderBy>;
  transaction_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: audit_flags */
export type AuditFlagsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "audit_flags" */
export enum AuditFlagsSelectColumn {
  /** column name */
  AUDITOR_ID = 'auditor_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  FLAG_TYPE = 'flag_type',
  /** column name */
  ID = 'id',
  /** column name */
  NOTES = 'notes',
  /** column name */
  SEVERITY = 'severity',
  /** column name */
  STATUS = 'status',
  /** column name */
  TRANSACTION_ID = 'transaction_id',
  /** column name */
  UPDATED_AT = 'updated_at',
}

/** input type for updating data in table "audit_flags" */
export type AuditFlagsSetInput = {
  auditor_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  flag_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  severity?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  transaction_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "audit_flags" */
export type AuditFlagsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: AuditFlagsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuditFlagsStreamCursorValueInput = {
  auditor_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  flag_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  severity?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  transaction_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "audit_flags" */
export enum AuditFlagsUpdateColumn {
  /** column name */
  AUDITOR_ID = 'auditor_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  FLAG_TYPE = 'flag_type',
  /** column name */
  ID = 'id',
  /** column name */
  NOTES = 'notes',
  /** column name */
  SEVERITY = 'severity',
  /** column name */
  STATUS = 'status',
  /** column name */
  TRANSACTION_ID = 'transaction_id',
  /** column name */
  UPDATED_AT = 'updated_at',
}

export type AuditFlagsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuditFlagsSetInput>;
  /** filter the rows which have to be updated */
  where: AuditFlagsBoolExp;
};

/** columns and relationships of "audit_trail" */
export type AuditTrail = {
  __typename?: 'audit_trail';
  action: Scalars['String']['output'];
  created_at: Maybe<Scalars['timestamptz']['output']>;
  entity_id: Scalars['uuid']['output'];
  entity_type: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  metadata: Maybe<Scalars['jsonb']['output']>;
  new_values: Maybe<Scalars['jsonb']['output']>;
  old_values: Maybe<Scalars['jsonb']['output']>;
  performed_by: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user: Maybe<Users>;
};

/** columns and relationships of "audit_trail" */
export type AuditTrailMetadataArgs = {
  path: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "audit_trail" */
export type AuditTrailNewValuesArgs = {
  path: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "audit_trail" */
export type AuditTrailOldValuesArgs = {
  path: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "audit_trail" */
export type AuditTrailAggregate = {
  __typename?: 'audit_trail_aggregate';
  aggregate: Maybe<AuditTrailAggregateFields>;
  nodes: Array<AuditTrail>;
};

export type AuditTrailAggregateBoolExp = {
  count?: InputMaybe<AuditTrailAggregateBoolExpCount>;
};

export type AuditTrailAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AuditTrailSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuditTrailBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "audit_trail" */
export type AuditTrailAggregateFields = {
  __typename?: 'audit_trail_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<AuditTrailMaxFields>;
  min: Maybe<AuditTrailMinFields>;
};

/** aggregate fields of "audit_trail" */
export type AuditTrailAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<AuditTrailSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "audit_trail" */
export type AuditTrailAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuditTrailMaxOrderBy>;
  min?: InputMaybe<AuditTrailMinOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuditTrailAppendInput = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  new_values?: InputMaybe<Scalars['jsonb']['input']>;
  old_values?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "audit_trail" */
export type AuditTrailArrRelInsertInput = {
  data: Array<AuditTrailInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuditTrailOnConflict>;
};

/** Boolean expression to filter rows from the table "audit_trail". All fields are combined with a logical 'AND'. */
export type AuditTrailBoolExp = {
  _and?: InputMaybe<Array<AuditTrailBoolExp>>;
  _not?: InputMaybe<AuditTrailBoolExp>;
  _or?: InputMaybe<Array<AuditTrailBoolExp>>;
  action?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  entity_id?: InputMaybe<UuidComparisonExp>;
  entity_type?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  metadata?: InputMaybe<JsonbComparisonExp>;
  new_values?: InputMaybe<JsonbComparisonExp>;
  old_values?: InputMaybe<JsonbComparisonExp>;
  performed_by?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
};

/** unique or primary key constraints on table "audit_trail" */
export enum AuditTrailConstraint {
  /** unique or primary key constraint on columns "id" */
  AUDIT_TRAIL_PKEY = 'audit_trail_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuditTrailDeleteAtPathInput = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
  new_values?: InputMaybe<Array<Scalars['String']['input']>>;
  old_values?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuditTrailDeleteElemInput = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
  new_values?: InputMaybe<Scalars['Int']['input']>;
  old_values?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuditTrailDeleteKeyInput = {
  metadata?: InputMaybe<Scalars['String']['input']>;
  new_values?: InputMaybe<Scalars['String']['input']>;
  old_values?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "audit_trail" */
export type AuditTrailInsertInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  new_values?: InputMaybe<Scalars['jsonb']['input']>;
  old_values?: InputMaybe<Scalars['jsonb']['input']>;
  performed_by?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
};

/** aggregate max on columns */
export type AuditTrailMaxFields = {
  __typename?: 'audit_trail_max_fields';
  action: Maybe<Scalars['String']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  entity_id: Maybe<Scalars['uuid']['output']>;
  entity_type: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  performed_by: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "audit_trail" */
export type AuditTrailMaxOrderBy = {
  action?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  entity_id?: InputMaybe<OrderBy>;
  entity_type?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  performed_by?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AuditTrailMinFields = {
  __typename?: 'audit_trail_min_fields';
  action: Maybe<Scalars['String']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  entity_id: Maybe<Scalars['uuid']['output']>;
  entity_type: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  performed_by: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "audit_trail" */
export type AuditTrailMinOrderBy = {
  action?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  entity_id?: InputMaybe<OrderBy>;
  entity_type?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  performed_by?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "audit_trail" */
export type AuditTrailMutationResponse = {
  __typename?: 'audit_trail_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuditTrail>;
};

/** on_conflict condition type for table "audit_trail" */
export type AuditTrailOnConflict = {
  constraint: AuditTrailConstraint;
  update_columns?: Array<AuditTrailUpdateColumn>;
  where?: InputMaybe<AuditTrailBoolExp>;
};

/** Ordering options when selecting data from "audit_trail". */
export type AuditTrailOrderBy = {
  action?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  entity_id?: InputMaybe<OrderBy>;
  entity_type?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  new_values?: InputMaybe<OrderBy>;
  old_values?: InputMaybe<OrderBy>;
  performed_by?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
};

/** primary key columns input for table: audit_trail */
export type AuditTrailPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuditTrailPrependInput = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  new_values?: InputMaybe<Scalars['jsonb']['input']>;
  old_values?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "audit_trail" */
export enum AuditTrailSelectColumn {
  /** column name */
  ACTION = 'action',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ENTITY_ID = 'entity_id',
  /** column name */
  ENTITY_TYPE = 'entity_type',
  /** column name */
  ID = 'id',
  /** column name */
  METADATA = 'metadata',
  /** column name */
  NEW_VALUES = 'new_values',
  /** column name */
  OLD_VALUES = 'old_values',
  /** column name */
  PERFORMED_BY = 'performed_by',
}

/** input type for updating data in table "audit_trail" */
export type AuditTrailSetInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  new_values?: InputMaybe<Scalars['jsonb']['input']>;
  old_values?: InputMaybe<Scalars['jsonb']['input']>;
  performed_by?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "audit_trail" */
export type AuditTrailStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: AuditTrailStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuditTrailStreamCursorValueInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  new_values?: InputMaybe<Scalars['jsonb']['input']>;
  old_values?: InputMaybe<Scalars['jsonb']['input']>;
  performed_by?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "audit_trail" */
export enum AuditTrailUpdateColumn {
  /** column name */
  ACTION = 'action',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ENTITY_ID = 'entity_id',
  /** column name */
  ENTITY_TYPE = 'entity_type',
  /** column name */
  ID = 'id',
  /** column name */
  METADATA = 'metadata',
  /** column name */
  NEW_VALUES = 'new_values',
  /** column name */
  OLD_VALUES = 'old_values',
  /** column name */
  PERFORMED_BY = 'performed_by',
}

export type AuditTrailUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuditTrailAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuditTrailDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuditTrailDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuditTrailDeleteKeyInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuditTrailPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuditTrailSetInput>;
  /** filter the rows which have to be updated */
  where: AuditTrailBoolExp;
};

/** columns and relationships of "credit_cards" */
export type CreditCards = {
  __typename?: 'credit_cards';
  card_brand: Scalars['String']['output'];
  card_holder_name: Scalars['String']['output'];
  card_name: Scalars['String']['output'];
  created_at: Maybe<Scalars['timestamptz']['output']>;
  expiry_month: Scalars['Int']['output'];
  expiry_year: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  is_active: Maybe<Scalars['Boolean']['output']>;
  last_four_digits: Scalars['String']['output'];
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: TransactionsAggregate;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** columns and relationships of "credit_cards" */
export type CreditCardsTransactionsArgs = {
  distinct_on: InputMaybe<Array<TransactionsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<TransactionsOrderBy>>;
  where: InputMaybe<TransactionsBoolExp>;
};

/** columns and relationships of "credit_cards" */
export type CreditCardsTransactionsAggregateArgs = {
  distinct_on: InputMaybe<Array<TransactionsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<TransactionsOrderBy>>;
  where: InputMaybe<TransactionsBoolExp>;
};

/** aggregated selection of "credit_cards" */
export type CreditCardsAggregate = {
  __typename?: 'credit_cards_aggregate';
  aggregate: Maybe<CreditCardsAggregateFields>;
  nodes: Array<CreditCards>;
};

export type CreditCardsAggregateBoolExp = {
  bool_and?: InputMaybe<CreditCardsAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<CreditCardsAggregateBoolExpBoolOr>;
  count?: InputMaybe<CreditCardsAggregateBoolExpCount>;
};

export type CreditCardsAggregateBoolExpBoolAnd = {
  arguments: CreditCardsSelectColumnCreditCardsAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CreditCardsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type CreditCardsAggregateBoolExpBoolOr = {
  arguments: CreditCardsSelectColumnCreditCardsAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CreditCardsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type CreditCardsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CreditCardsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CreditCardsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "credit_cards" */
export type CreditCardsAggregateFields = {
  __typename?: 'credit_cards_aggregate_fields';
  avg: Maybe<CreditCardsAvgFields>;
  count: Scalars['Int']['output'];
  max: Maybe<CreditCardsMaxFields>;
  min: Maybe<CreditCardsMinFields>;
  stddev: Maybe<CreditCardsStddevFields>;
  stddev_pop: Maybe<CreditCardsStddevPopFields>;
  stddev_samp: Maybe<CreditCardsStddevSampFields>;
  sum: Maybe<CreditCardsSumFields>;
  var_pop: Maybe<CreditCardsVarPopFields>;
  var_samp: Maybe<CreditCardsVarSampFields>;
  variance: Maybe<CreditCardsVarianceFields>;
};

/** aggregate fields of "credit_cards" */
export type CreditCardsAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<CreditCardsSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "credit_cards" */
export type CreditCardsAggregateOrderBy = {
  avg?: InputMaybe<CreditCardsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CreditCardsMaxOrderBy>;
  min?: InputMaybe<CreditCardsMinOrderBy>;
  stddev?: InputMaybe<CreditCardsStddevOrderBy>;
  stddev_pop?: InputMaybe<CreditCardsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<CreditCardsStddevSampOrderBy>;
  sum?: InputMaybe<CreditCardsSumOrderBy>;
  var_pop?: InputMaybe<CreditCardsVarPopOrderBy>;
  var_samp?: InputMaybe<CreditCardsVarSampOrderBy>;
  variance?: InputMaybe<CreditCardsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "credit_cards" */
export type CreditCardsArrRelInsertInput = {
  data: Array<CreditCardsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<CreditCardsOnConflict>;
};

/** aggregate avg on columns */
export type CreditCardsAvgFields = {
  __typename?: 'credit_cards_avg_fields';
  expiry_month: Maybe<Scalars['Float']['output']>;
  expiry_year: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "credit_cards" */
export type CreditCardsAvgOrderBy = {
  expiry_month?: InputMaybe<OrderBy>;
  expiry_year?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "credit_cards". All fields are combined with a logical 'AND'. */
export type CreditCardsBoolExp = {
  _and?: InputMaybe<Array<CreditCardsBoolExp>>;
  _not?: InputMaybe<CreditCardsBoolExp>;
  _or?: InputMaybe<Array<CreditCardsBoolExp>>;
  card_brand?: InputMaybe<StringComparisonExp>;
  card_holder_name?: InputMaybe<StringComparisonExp>;
  card_name?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  expiry_month?: InputMaybe<IntComparisonExp>;
  expiry_year?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  is_active?: InputMaybe<BooleanComparisonExp>;
  last_four_digits?: InputMaybe<StringComparisonExp>;
  transactions?: InputMaybe<TransactionsBoolExp>;
  transactions_aggregate?: InputMaybe<TransactionsAggregateBoolExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "credit_cards" */
export enum CreditCardsConstraint {
  /** unique or primary key constraint on columns "id" */
  CREDIT_CARDS_PKEY = 'credit_cards_pkey',
}

/** input type for incrementing numeric columns in table "credit_cards" */
export type CreditCardsIncInput = {
  expiry_month?: InputMaybe<Scalars['Int']['input']>;
  expiry_year?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "credit_cards" */
export type CreditCardsInsertInput = {
  card_brand?: InputMaybe<Scalars['String']['input']>;
  card_holder_name?: InputMaybe<Scalars['String']['input']>;
  card_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expiry_month?: InputMaybe<Scalars['Int']['input']>;
  expiry_year?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  last_four_digits?: InputMaybe<Scalars['String']['input']>;
  transactions?: InputMaybe<TransactionsArrRelInsertInput>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type CreditCardsMaxFields = {
  __typename?: 'credit_cards_max_fields';
  card_brand: Maybe<Scalars['String']['output']>;
  card_holder_name: Maybe<Scalars['String']['output']>;
  card_name: Maybe<Scalars['String']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  expiry_month: Maybe<Scalars['Int']['output']>;
  expiry_year: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  last_four_digits: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  user_id: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "credit_cards" */
export type CreditCardsMaxOrderBy = {
  card_brand?: InputMaybe<OrderBy>;
  card_holder_name?: InputMaybe<OrderBy>;
  card_name?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  expiry_month?: InputMaybe<OrderBy>;
  expiry_year?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  last_four_digits?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CreditCardsMinFields = {
  __typename?: 'credit_cards_min_fields';
  card_brand: Maybe<Scalars['String']['output']>;
  card_holder_name: Maybe<Scalars['String']['output']>;
  card_name: Maybe<Scalars['String']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  expiry_month: Maybe<Scalars['Int']['output']>;
  expiry_year: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  last_four_digits: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  user_id: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "credit_cards" */
export type CreditCardsMinOrderBy = {
  card_brand?: InputMaybe<OrderBy>;
  card_holder_name?: InputMaybe<OrderBy>;
  card_name?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  expiry_month?: InputMaybe<OrderBy>;
  expiry_year?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  last_four_digits?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "credit_cards" */
export type CreditCardsMutationResponse = {
  __typename?: 'credit_cards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<CreditCards>;
};

/** input type for inserting object relation for remote table "credit_cards" */
export type CreditCardsObjRelInsertInput = {
  data: CreditCardsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<CreditCardsOnConflict>;
};

/** on_conflict condition type for table "credit_cards" */
export type CreditCardsOnConflict = {
  constraint: CreditCardsConstraint;
  update_columns?: Array<CreditCardsUpdateColumn>;
  where?: InputMaybe<CreditCardsBoolExp>;
};

/** Ordering options when selecting data from "credit_cards". */
export type CreditCardsOrderBy = {
  card_brand?: InputMaybe<OrderBy>;
  card_holder_name?: InputMaybe<OrderBy>;
  card_name?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  expiry_month?: InputMaybe<OrderBy>;
  expiry_year?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  is_active?: InputMaybe<OrderBy>;
  last_four_digits?: InputMaybe<OrderBy>;
  transactions_aggregate?: InputMaybe<TransactionsAggregateOrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: credit_cards */
export type CreditCardsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "credit_cards" */
export enum CreditCardsSelectColumn {
  /** column name */
  CARD_BRAND = 'card_brand',
  /** column name */
  CARD_HOLDER_NAME = 'card_holder_name',
  /** column name */
  CARD_NAME = 'card_name',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  EXPIRY_MONTH = 'expiry_month',
  /** column name */
  EXPIRY_YEAR = 'expiry_year',
  /** column name */
  ID = 'id',
  /** column name */
  IS_ACTIVE = 'is_active',
  /** column name */
  LAST_FOUR_DIGITS = 'last_four_digits',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id',
}

/** select "credit_cards_aggregate_bool_exp_bool_and_arguments_columns" columns of table "credit_cards" */
export enum CreditCardsSelectColumnCreditCardsAggregateBoolExpBoolAndArgumentsColumns {
  /** column name */
  IS_ACTIVE = 'is_active',
}

/** select "credit_cards_aggregate_bool_exp_bool_or_arguments_columns" columns of table "credit_cards" */
export enum CreditCardsSelectColumnCreditCardsAggregateBoolExpBoolOrArgumentsColumns {
  /** column name */
  IS_ACTIVE = 'is_active',
}

/** input type for updating data in table "credit_cards" */
export type CreditCardsSetInput = {
  card_brand?: InputMaybe<Scalars['String']['input']>;
  card_holder_name?: InputMaybe<Scalars['String']['input']>;
  card_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expiry_month?: InputMaybe<Scalars['Int']['input']>;
  expiry_year?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  last_four_digits?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type CreditCardsStddevFields = {
  __typename?: 'credit_cards_stddev_fields';
  expiry_month: Maybe<Scalars['Float']['output']>;
  expiry_year: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "credit_cards" */
export type CreditCardsStddevOrderBy = {
  expiry_month?: InputMaybe<OrderBy>;
  expiry_year?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type CreditCardsStddevPopFields = {
  __typename?: 'credit_cards_stddev_pop_fields';
  expiry_month: Maybe<Scalars['Float']['output']>;
  expiry_year: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "credit_cards" */
export type CreditCardsStddevPopOrderBy = {
  expiry_month?: InputMaybe<OrderBy>;
  expiry_year?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type CreditCardsStddevSampFields = {
  __typename?: 'credit_cards_stddev_samp_fields';
  expiry_month: Maybe<Scalars['Float']['output']>;
  expiry_year: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "credit_cards" */
export type CreditCardsStddevSampOrderBy = {
  expiry_month?: InputMaybe<OrderBy>;
  expiry_year?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "credit_cards" */
export type CreditCardsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CreditCardsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CreditCardsStreamCursorValueInput = {
  card_brand?: InputMaybe<Scalars['String']['input']>;
  card_holder_name?: InputMaybe<Scalars['String']['input']>;
  card_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expiry_month?: InputMaybe<Scalars['Int']['input']>;
  expiry_year?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  last_four_digits?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type CreditCardsSumFields = {
  __typename?: 'credit_cards_sum_fields';
  expiry_month: Maybe<Scalars['Int']['output']>;
  expiry_year: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "credit_cards" */
export type CreditCardsSumOrderBy = {
  expiry_month?: InputMaybe<OrderBy>;
  expiry_year?: InputMaybe<OrderBy>;
};

/** update columns of table "credit_cards" */
export enum CreditCardsUpdateColumn {
  /** column name */
  CARD_BRAND = 'card_brand',
  /** column name */
  CARD_HOLDER_NAME = 'card_holder_name',
  /** column name */
  CARD_NAME = 'card_name',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  EXPIRY_MONTH = 'expiry_month',
  /** column name */
  EXPIRY_YEAR = 'expiry_year',
  /** column name */
  ID = 'id',
  /** column name */
  IS_ACTIVE = 'is_active',
  /** column name */
  LAST_FOUR_DIGITS = 'last_four_digits',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id',
}

export type CreditCardsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CreditCardsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CreditCardsSetInput>;
  /** filter the rows which have to be updated */
  where: CreditCardsBoolExp;
};

/** aggregate var_pop on columns */
export type CreditCardsVarPopFields = {
  __typename?: 'credit_cards_var_pop_fields';
  expiry_month: Maybe<Scalars['Float']['output']>;
  expiry_year: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "credit_cards" */
export type CreditCardsVarPopOrderBy = {
  expiry_month?: InputMaybe<OrderBy>;
  expiry_year?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type CreditCardsVarSampFields = {
  __typename?: 'credit_cards_var_samp_fields';
  expiry_month: Maybe<Scalars['Float']['output']>;
  expiry_year: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "credit_cards" */
export type CreditCardsVarSampOrderBy = {
  expiry_month?: InputMaybe<OrderBy>;
  expiry_year?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type CreditCardsVarianceFields = {
  __typename?: 'credit_cards_variance_fields';
  expiry_month: Maybe<Scalars['Float']['output']>;
  expiry_year: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "credit_cards" */
export type CreditCardsVarianceOrderBy = {
  expiry_month?: InputMaybe<OrderBy>;
  expiry_year?: InputMaybe<OrderBy>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  ASC = 'ASC',
  /** descending ordering of the cursor */
  DESC = 'DESC',
}

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "audit_flags" */
  delete_audit_flags: Maybe<AuditFlagsMutationResponse>;
  /** delete single row from the table: "audit_flags" */
  delete_audit_flags_by_pk: Maybe<AuditFlags>;
  /** delete data from the table: "audit_trail" */
  delete_audit_trail: Maybe<AuditTrailMutationResponse>;
  /** delete single row from the table: "audit_trail" */
  delete_audit_trail_by_pk: Maybe<AuditTrail>;
  /** delete data from the table: "credit_cards" */
  delete_credit_cards: Maybe<CreditCardsMutationResponse>;
  /** delete single row from the table: "credit_cards" */
  delete_credit_cards_by_pk: Maybe<CreditCards>;
  /** delete data from the table: "transactions" */
  delete_transactions: Maybe<TransactionsMutationResponse>;
  /** delete single row from the table: "transactions" */
  delete_transactions_by_pk: Maybe<Transactions>;
  /** delete data from the table: "users" */
  delete_users: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk: Maybe<Users>;
  /** insert data into the table: "audit_flags" */
  insert_audit_flags: Maybe<AuditFlagsMutationResponse>;
  /** insert a single row into the table: "audit_flags" */
  insert_audit_flags_one: Maybe<AuditFlags>;
  /** insert data into the table: "audit_trail" */
  insert_audit_trail: Maybe<AuditTrailMutationResponse>;
  /** insert a single row into the table: "audit_trail" */
  insert_audit_trail_one: Maybe<AuditTrail>;
  /** insert data into the table: "credit_cards" */
  insert_credit_cards: Maybe<CreditCardsMutationResponse>;
  /** insert a single row into the table: "credit_cards" */
  insert_credit_cards_one: Maybe<CreditCards>;
  /** insert data into the table: "transactions" */
  insert_transactions: Maybe<TransactionsMutationResponse>;
  /** insert a single row into the table: "transactions" */
  insert_transactions_one: Maybe<Transactions>;
  /** insert data into the table: "users" */
  insert_users: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one: Maybe<Users>;
  /** update data of the table: "audit_flags" */
  update_audit_flags: Maybe<AuditFlagsMutationResponse>;
  /** update single row of the table: "audit_flags" */
  update_audit_flags_by_pk: Maybe<AuditFlags>;
  /** update multiples rows of table: "audit_flags" */
  update_audit_flags_many: Maybe<Array<Maybe<AuditFlagsMutationResponse>>>;
  /** update data of the table: "audit_trail" */
  update_audit_trail: Maybe<AuditTrailMutationResponse>;
  /** update single row of the table: "audit_trail" */
  update_audit_trail_by_pk: Maybe<AuditTrail>;
  /** update multiples rows of table: "audit_trail" */
  update_audit_trail_many: Maybe<Array<Maybe<AuditTrailMutationResponse>>>;
  /** update data of the table: "credit_cards" */
  update_credit_cards: Maybe<CreditCardsMutationResponse>;
  /** update single row of the table: "credit_cards" */
  update_credit_cards_by_pk: Maybe<CreditCards>;
  /** update multiples rows of table: "credit_cards" */
  update_credit_cards_many: Maybe<Array<Maybe<CreditCardsMutationResponse>>>;
  /** update data of the table: "transactions" */
  update_transactions: Maybe<TransactionsMutationResponse>;
  /** update single row of the table: "transactions" */
  update_transactions_by_pk: Maybe<Transactions>;
  /** update multiples rows of table: "transactions" */
  update_transactions_many: Maybe<Array<Maybe<TransactionsMutationResponse>>>;
  /** update data of the table: "users" */
  update_users: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many: Maybe<Array<Maybe<UsersMutationResponse>>>;
};

/** mutation root */
export type MutationRootDeleteAuditFlagsArgs = {
  where: AuditFlagsBoolExp;
};

/** mutation root */
export type MutationRootDeleteAuditFlagsByPkArgs = {
  id: Scalars['uuid']['input'];
};

/** mutation root */
export type MutationRootDeleteAuditTrailArgs = {
  where: AuditTrailBoolExp;
};

/** mutation root */
export type MutationRootDeleteAuditTrailByPkArgs = {
  id: Scalars['uuid']['input'];
};

/** mutation root */
export type MutationRootDeleteCreditCardsArgs = {
  where: CreditCardsBoolExp;
};

/** mutation root */
export type MutationRootDeleteCreditCardsByPkArgs = {
  id: Scalars['uuid']['input'];
};

/** mutation root */
export type MutationRootDeleteTransactionsArgs = {
  where: TransactionsBoolExp;
};

/** mutation root */
export type MutationRootDeleteTransactionsByPkArgs = {
  id: Scalars['uuid']['input'];
};

/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};

/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  id: Scalars['uuid']['input'];
};

/** mutation root */
export type MutationRootInsertAuditFlagsArgs = {
  objects: Array<AuditFlagsInsertInput>;
  on_conflict: InputMaybe<AuditFlagsOnConflict>;
};

/** mutation root */
export type MutationRootInsertAuditFlagsOneArgs = {
  object: AuditFlagsInsertInput;
  on_conflict: InputMaybe<AuditFlagsOnConflict>;
};

/** mutation root */
export type MutationRootInsertAuditTrailArgs = {
  objects: Array<AuditTrailInsertInput>;
  on_conflict: InputMaybe<AuditTrailOnConflict>;
};

/** mutation root */
export type MutationRootInsertAuditTrailOneArgs = {
  object: AuditTrailInsertInput;
  on_conflict: InputMaybe<AuditTrailOnConflict>;
};

/** mutation root */
export type MutationRootInsertCreditCardsArgs = {
  objects: Array<CreditCardsInsertInput>;
  on_conflict: InputMaybe<CreditCardsOnConflict>;
};

/** mutation root */
export type MutationRootInsertCreditCardsOneArgs = {
  object: CreditCardsInsertInput;
  on_conflict: InputMaybe<CreditCardsOnConflict>;
};

/** mutation root */
export type MutationRootInsertTransactionsArgs = {
  objects: Array<TransactionsInsertInput>;
  on_conflict: InputMaybe<TransactionsOnConflict>;
};

/** mutation root */
export type MutationRootInsertTransactionsOneArgs = {
  object: TransactionsInsertInput;
  on_conflict: InputMaybe<TransactionsOnConflict>;
};

/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict: InputMaybe<UsersOnConflict>;
};

/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  on_conflict: InputMaybe<UsersOnConflict>;
};

/** mutation root */
export type MutationRootUpdateAuditFlagsArgs = {
  _set: InputMaybe<AuditFlagsSetInput>;
  where: AuditFlagsBoolExp;
};

/** mutation root */
export type MutationRootUpdateAuditFlagsByPkArgs = {
  _set: InputMaybe<AuditFlagsSetInput>;
  pk_columns: AuditFlagsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateAuditFlagsManyArgs = {
  updates: Array<AuditFlagsUpdates>;
};

/** mutation root */
export type MutationRootUpdateAuditTrailArgs = {
  _append: InputMaybe<AuditTrailAppendInput>;
  _delete_at_path: InputMaybe<AuditTrailDeleteAtPathInput>;
  _delete_elem: InputMaybe<AuditTrailDeleteElemInput>;
  _delete_key: InputMaybe<AuditTrailDeleteKeyInput>;
  _prepend: InputMaybe<AuditTrailPrependInput>;
  _set: InputMaybe<AuditTrailSetInput>;
  where: AuditTrailBoolExp;
};

/** mutation root */
export type MutationRootUpdateAuditTrailByPkArgs = {
  _append: InputMaybe<AuditTrailAppendInput>;
  _delete_at_path: InputMaybe<AuditTrailDeleteAtPathInput>;
  _delete_elem: InputMaybe<AuditTrailDeleteElemInput>;
  _delete_key: InputMaybe<AuditTrailDeleteKeyInput>;
  _prepend: InputMaybe<AuditTrailPrependInput>;
  _set: InputMaybe<AuditTrailSetInput>;
  pk_columns: AuditTrailPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateAuditTrailManyArgs = {
  updates: Array<AuditTrailUpdates>;
};

/** mutation root */
export type MutationRootUpdateCreditCardsArgs = {
  _inc: InputMaybe<CreditCardsIncInput>;
  _set: InputMaybe<CreditCardsSetInput>;
  where: CreditCardsBoolExp;
};

/** mutation root */
export type MutationRootUpdateCreditCardsByPkArgs = {
  _inc: InputMaybe<CreditCardsIncInput>;
  _set: InputMaybe<CreditCardsSetInput>;
  pk_columns: CreditCardsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateCreditCardsManyArgs = {
  updates: Array<CreditCardsUpdates>;
};

/** mutation root */
export type MutationRootUpdateTransactionsArgs = {
  _inc: InputMaybe<TransactionsIncInput>;
  _set: InputMaybe<TransactionsSetInput>;
  where: TransactionsBoolExp;
};

/** mutation root */
export type MutationRootUpdateTransactionsByPkArgs = {
  _inc: InputMaybe<TransactionsIncInput>;
  _set: InputMaybe<TransactionsSetInput>;
  pk_columns: TransactionsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateTransactionsManyArgs = {
  updates: Array<TransactionsUpdates>;
};

/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _set: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};

/** mutation root */
export type MutationRootUpdateUsersByPkArgs = {
  _set: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  ASC = 'asc',
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = 'asc_nulls_first',
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = 'asc_nulls_last',
  /** in descending order, nulls first */
  DESC = 'desc',
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = 'desc_nulls_first',
  /** in descending order, nulls last */
  DESC_NULLS_LAST = 'desc_nulls_last',
}

export type QueryRoot = {
  __typename?: 'query_root';
  /** An array relationship */
  audit_flags: Array<AuditFlags>;
  /** An aggregate relationship */
  audit_flags_aggregate: AuditFlagsAggregate;
  /** fetch data from the table: "audit_flags" using primary key columns */
  audit_flags_by_pk: Maybe<AuditFlags>;
  /** fetch data from the table: "audit_trail" */
  audit_trail: Array<AuditTrail>;
  /** fetch aggregated fields from the table: "audit_trail" */
  audit_trail_aggregate: AuditTrailAggregate;
  /** fetch data from the table: "audit_trail" using primary key columns */
  audit_trail_by_pk: Maybe<AuditTrail>;
  /** An array relationship */
  credit_cards: Array<CreditCards>;
  /** An aggregate relationship */
  credit_cards_aggregate: CreditCardsAggregate;
  /** fetch data from the table: "credit_cards" using primary key columns */
  credit_cards_by_pk: Maybe<CreditCards>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: TransactionsAggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk: Maybe<Transactions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
};

export type QueryRootAuditFlagsArgs = {
  distinct_on: InputMaybe<Array<AuditFlagsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<AuditFlagsOrderBy>>;
  where: InputMaybe<AuditFlagsBoolExp>;
};

export type QueryRootAuditFlagsAggregateArgs = {
  distinct_on: InputMaybe<Array<AuditFlagsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<AuditFlagsOrderBy>>;
  where: InputMaybe<AuditFlagsBoolExp>;
};

export type QueryRootAuditFlagsByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type QueryRootAuditTrailArgs = {
  distinct_on: InputMaybe<Array<AuditTrailSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<AuditTrailOrderBy>>;
  where: InputMaybe<AuditTrailBoolExp>;
};

export type QueryRootAuditTrailAggregateArgs = {
  distinct_on: InputMaybe<Array<AuditTrailSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<AuditTrailOrderBy>>;
  where: InputMaybe<AuditTrailBoolExp>;
};

export type QueryRootAuditTrailByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type QueryRootCreditCardsArgs = {
  distinct_on: InputMaybe<Array<CreditCardsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<CreditCardsOrderBy>>;
  where: InputMaybe<CreditCardsBoolExp>;
};

export type QueryRootCreditCardsAggregateArgs = {
  distinct_on: InputMaybe<Array<CreditCardsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<CreditCardsOrderBy>>;
  where: InputMaybe<CreditCardsBoolExp>;
};

export type QueryRootCreditCardsByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type QueryRootTransactionsArgs = {
  distinct_on: InputMaybe<Array<TransactionsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<TransactionsOrderBy>>;
  where: InputMaybe<TransactionsBoolExp>;
};

export type QueryRootTransactionsAggregateArgs = {
  distinct_on: InputMaybe<Array<TransactionsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<TransactionsOrderBy>>;
  where: InputMaybe<TransactionsBoolExp>;
};

export type QueryRootTransactionsByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type QueryRootUsersArgs = {
  distinct_on: InputMaybe<Array<UsersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<UsersOrderBy>>;
  where: InputMaybe<UsersBoolExp>;
};

export type QueryRootUsersAggregateArgs = {
  distinct_on: InputMaybe<Array<UsersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<UsersOrderBy>>;
  where: InputMaybe<UsersBoolExp>;
};

export type QueryRootUsersByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** An array relationship */
  audit_flags: Array<AuditFlags>;
  /** An aggregate relationship */
  audit_flags_aggregate: AuditFlagsAggregate;
  /** fetch data from the table: "audit_flags" using primary key columns */
  audit_flags_by_pk: Maybe<AuditFlags>;
  /** fetch data from the table in a streaming manner: "audit_flags" */
  audit_flags_stream: Array<AuditFlags>;
  /** fetch data from the table: "audit_trail" */
  audit_trail: Array<AuditTrail>;
  /** fetch aggregated fields from the table: "audit_trail" */
  audit_trail_aggregate: AuditTrailAggregate;
  /** fetch data from the table: "audit_trail" using primary key columns */
  audit_trail_by_pk: Maybe<AuditTrail>;
  /** fetch data from the table in a streaming manner: "audit_trail" */
  audit_trail_stream: Array<AuditTrail>;
  /** An array relationship */
  credit_cards: Array<CreditCards>;
  /** An aggregate relationship */
  credit_cards_aggregate: CreditCardsAggregate;
  /** fetch data from the table: "credit_cards" using primary key columns */
  credit_cards_by_pk: Maybe<CreditCards>;
  /** fetch data from the table in a streaming manner: "credit_cards" */
  credit_cards_stream: Array<CreditCards>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: TransactionsAggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk: Maybe<Transactions>;
  /** fetch data from the table in a streaming manner: "transactions" */
  transactions_stream: Array<Transactions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};

export type SubscriptionRootAuditFlagsArgs = {
  distinct_on: InputMaybe<Array<AuditFlagsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<AuditFlagsOrderBy>>;
  where: InputMaybe<AuditFlagsBoolExp>;
};

export type SubscriptionRootAuditFlagsAggregateArgs = {
  distinct_on: InputMaybe<Array<AuditFlagsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<AuditFlagsOrderBy>>;
  where: InputMaybe<AuditFlagsBoolExp>;
};

export type SubscriptionRootAuditFlagsByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type SubscriptionRootAuditFlagsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuditFlagsStreamCursorInput>>;
  where: InputMaybe<AuditFlagsBoolExp>;
};

export type SubscriptionRootAuditTrailArgs = {
  distinct_on: InputMaybe<Array<AuditTrailSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<AuditTrailOrderBy>>;
  where: InputMaybe<AuditTrailBoolExp>;
};

export type SubscriptionRootAuditTrailAggregateArgs = {
  distinct_on: InputMaybe<Array<AuditTrailSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<AuditTrailOrderBy>>;
  where: InputMaybe<AuditTrailBoolExp>;
};

export type SubscriptionRootAuditTrailByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type SubscriptionRootAuditTrailStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuditTrailStreamCursorInput>>;
  where: InputMaybe<AuditTrailBoolExp>;
};

export type SubscriptionRootCreditCardsArgs = {
  distinct_on: InputMaybe<Array<CreditCardsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<CreditCardsOrderBy>>;
  where: InputMaybe<CreditCardsBoolExp>;
};

export type SubscriptionRootCreditCardsAggregateArgs = {
  distinct_on: InputMaybe<Array<CreditCardsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<CreditCardsOrderBy>>;
  where: InputMaybe<CreditCardsBoolExp>;
};

export type SubscriptionRootCreditCardsByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type SubscriptionRootCreditCardsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CreditCardsStreamCursorInput>>;
  where: InputMaybe<CreditCardsBoolExp>;
};

export type SubscriptionRootTransactionsArgs = {
  distinct_on: InputMaybe<Array<TransactionsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<TransactionsOrderBy>>;
  where: InputMaybe<TransactionsBoolExp>;
};

export type SubscriptionRootTransactionsAggregateArgs = {
  distinct_on: InputMaybe<Array<TransactionsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<TransactionsOrderBy>>;
  where: InputMaybe<TransactionsBoolExp>;
};

export type SubscriptionRootTransactionsByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type SubscriptionRootTransactionsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<TransactionsStreamCursorInput>>;
  where: InputMaybe<TransactionsBoolExp>;
};

export type SubscriptionRootUsersArgs = {
  distinct_on: InputMaybe<Array<UsersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<UsersOrderBy>>;
  where: InputMaybe<UsersBoolExp>;
};

export type SubscriptionRootUsersAggregateArgs = {
  distinct_on: InputMaybe<Array<UsersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<UsersOrderBy>>;
  where: InputMaybe<UsersBoolExp>;
};

export type SubscriptionRootUsersByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type SubscriptionRootUsersStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UsersStreamCursorInput>>;
  where: InputMaybe<UsersBoolExp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "transactions" */
export type Transactions = {
  __typename?: 'transactions';
  amount: Scalars['numeric']['output'];
  /** An array relationship */
  audit_flags: Array<AuditFlags>;
  /** An aggregate relationship */
  audit_flags_aggregate: AuditFlagsAggregate;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  credit_card: CreditCards;
  credit_card_id: Scalars['uuid']['output'];
  currency: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  merchant_category: Maybe<Scalars['String']['output']>;
  merchant_name: Maybe<Scalars['String']['output']>;
  posted_date: Maybe<Scalars['timestamptz']['output']>;
  status: Scalars['String']['output'];
  transaction_date: Scalars['timestamptz']['output'];
  transaction_id: Maybe<Scalars['String']['output']>;
  transaction_type: Scalars['String']['output'];
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** columns and relationships of "transactions" */
export type TransactionsAuditFlagsArgs = {
  distinct_on: InputMaybe<Array<AuditFlagsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<AuditFlagsOrderBy>>;
  where: InputMaybe<AuditFlagsBoolExp>;
};

/** columns and relationships of "transactions" */
export type TransactionsAuditFlagsAggregateArgs = {
  distinct_on: InputMaybe<Array<AuditFlagsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<AuditFlagsOrderBy>>;
  where: InputMaybe<AuditFlagsBoolExp>;
};

/** aggregated selection of "transactions" */
export type TransactionsAggregate = {
  __typename?: 'transactions_aggregate';
  aggregate: Maybe<TransactionsAggregateFields>;
  nodes: Array<Transactions>;
};

export type TransactionsAggregateBoolExp = {
  count?: InputMaybe<TransactionsAggregateBoolExpCount>;
};

export type TransactionsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<TransactionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<TransactionsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "transactions" */
export type TransactionsAggregateFields = {
  __typename?: 'transactions_aggregate_fields';
  avg: Maybe<TransactionsAvgFields>;
  count: Scalars['Int']['output'];
  max: Maybe<TransactionsMaxFields>;
  min: Maybe<TransactionsMinFields>;
  stddev: Maybe<TransactionsStddevFields>;
  stddev_pop: Maybe<TransactionsStddevPopFields>;
  stddev_samp: Maybe<TransactionsStddevSampFields>;
  sum: Maybe<TransactionsSumFields>;
  var_pop: Maybe<TransactionsVarPopFields>;
  var_samp: Maybe<TransactionsVarSampFields>;
  variance: Maybe<TransactionsVarianceFields>;
};

/** aggregate fields of "transactions" */
export type TransactionsAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<TransactionsSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "transactions" */
export type TransactionsAggregateOrderBy = {
  avg?: InputMaybe<TransactionsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<TransactionsMaxOrderBy>;
  min?: InputMaybe<TransactionsMinOrderBy>;
  stddev?: InputMaybe<TransactionsStddevOrderBy>;
  stddev_pop?: InputMaybe<TransactionsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<TransactionsStddevSampOrderBy>;
  sum?: InputMaybe<TransactionsSumOrderBy>;
  var_pop?: InputMaybe<TransactionsVarPopOrderBy>;
  var_samp?: InputMaybe<TransactionsVarSampOrderBy>;
  variance?: InputMaybe<TransactionsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "transactions" */
export type TransactionsArrRelInsertInput = {
  data: Array<TransactionsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<TransactionsOnConflict>;
};

/** aggregate avg on columns */
export type TransactionsAvgFields = {
  __typename?: 'transactions_avg_fields';
  amount: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "transactions" */
export type TransactionsAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export type TransactionsBoolExp = {
  _and?: InputMaybe<Array<TransactionsBoolExp>>;
  _not?: InputMaybe<TransactionsBoolExp>;
  _or?: InputMaybe<Array<TransactionsBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  audit_flags?: InputMaybe<AuditFlagsBoolExp>;
  audit_flags_aggregate?: InputMaybe<AuditFlagsAggregateBoolExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  credit_card?: InputMaybe<CreditCardsBoolExp>;
  credit_card_id?: InputMaybe<UuidComparisonExp>;
  currency?: InputMaybe<StringComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  merchant_category?: InputMaybe<StringComparisonExp>;
  merchant_name?: InputMaybe<StringComparisonExp>;
  posted_date?: InputMaybe<TimestamptzComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  transaction_date?: InputMaybe<TimestamptzComparisonExp>;
  transaction_id?: InputMaybe<StringComparisonExp>;
  transaction_type?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "transactions" */
export enum TransactionsConstraint {
  /** unique or primary key constraint on columns "id" */
  TRANSACTIONS_PKEY = 'transactions_pkey',
  /** unique or primary key constraint on columns "transaction_id" */
  TRANSACTIONS_TRANSACTION_ID_KEY = 'transactions_transaction_id_key',
}

/** input type for incrementing numeric columns in table "transactions" */
export type TransactionsIncInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "transactions" */
export type TransactionsInsertInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  audit_flags?: InputMaybe<AuditFlagsArrRelInsertInput>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  credit_card?: InputMaybe<CreditCardsObjRelInsertInput>;
  credit_card_id?: InputMaybe<Scalars['uuid']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  merchant_category?: InputMaybe<Scalars['String']['input']>;
  merchant_name?: InputMaybe<Scalars['String']['input']>;
  posted_date?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  transaction_date?: InputMaybe<Scalars['timestamptz']['input']>;
  transaction_id?: InputMaybe<Scalars['String']['input']>;
  transaction_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type TransactionsMaxFields = {
  __typename?: 'transactions_max_fields';
  amount: Maybe<Scalars['numeric']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  credit_card_id: Maybe<Scalars['uuid']['output']>;
  currency: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  merchant_category: Maybe<Scalars['String']['output']>;
  merchant_name: Maybe<Scalars['String']['output']>;
  posted_date: Maybe<Scalars['timestamptz']['output']>;
  status: Maybe<Scalars['String']['output']>;
  transaction_date: Maybe<Scalars['timestamptz']['output']>;
  transaction_id: Maybe<Scalars['String']['output']>;
  transaction_type: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "transactions" */
export type TransactionsMaxOrderBy = {
  amount?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  credit_card_id?: InputMaybe<OrderBy>;
  currency?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  merchant_category?: InputMaybe<OrderBy>;
  merchant_name?: InputMaybe<OrderBy>;
  posted_date?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  transaction_date?: InputMaybe<OrderBy>;
  transaction_id?: InputMaybe<OrderBy>;
  transaction_type?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type TransactionsMinFields = {
  __typename?: 'transactions_min_fields';
  amount: Maybe<Scalars['numeric']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  credit_card_id: Maybe<Scalars['uuid']['output']>;
  currency: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  merchant_category: Maybe<Scalars['String']['output']>;
  merchant_name: Maybe<Scalars['String']['output']>;
  posted_date: Maybe<Scalars['timestamptz']['output']>;
  status: Maybe<Scalars['String']['output']>;
  transaction_date: Maybe<Scalars['timestamptz']['output']>;
  transaction_id: Maybe<Scalars['String']['output']>;
  transaction_type: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "transactions" */
export type TransactionsMinOrderBy = {
  amount?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  credit_card_id?: InputMaybe<OrderBy>;
  currency?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  merchant_category?: InputMaybe<OrderBy>;
  merchant_name?: InputMaybe<OrderBy>;
  posted_date?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  transaction_date?: InputMaybe<OrderBy>;
  transaction_id?: InputMaybe<OrderBy>;
  transaction_type?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "transactions" */
export type TransactionsMutationResponse = {
  __typename?: 'transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Transactions>;
};

/** input type for inserting object relation for remote table "transactions" */
export type TransactionsObjRelInsertInput = {
  data: TransactionsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<TransactionsOnConflict>;
};

/** on_conflict condition type for table "transactions" */
export type TransactionsOnConflict = {
  constraint: TransactionsConstraint;
  update_columns?: Array<TransactionsUpdateColumn>;
  where?: InputMaybe<TransactionsBoolExp>;
};

/** Ordering options when selecting data from "transactions". */
export type TransactionsOrderBy = {
  amount?: InputMaybe<OrderBy>;
  audit_flags_aggregate?: InputMaybe<AuditFlagsAggregateOrderBy>;
  created_at?: InputMaybe<OrderBy>;
  credit_card?: InputMaybe<CreditCardsOrderBy>;
  credit_card_id?: InputMaybe<OrderBy>;
  currency?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  merchant_category?: InputMaybe<OrderBy>;
  merchant_name?: InputMaybe<OrderBy>;
  posted_date?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  transaction_date?: InputMaybe<OrderBy>;
  transaction_id?: InputMaybe<OrderBy>;
  transaction_type?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: transactions */
export type TransactionsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "transactions" */
export enum TransactionsSelectColumn {
  /** column name */
  AMOUNT = 'amount',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  CREDIT_CARD_ID = 'credit_card_id',
  /** column name */
  CURRENCY = 'currency',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  MERCHANT_CATEGORY = 'merchant_category',
  /** column name */
  MERCHANT_NAME = 'merchant_name',
  /** column name */
  POSTED_DATE = 'posted_date',
  /** column name */
  STATUS = 'status',
  /** column name */
  TRANSACTION_DATE = 'transaction_date',
  /** column name */
  TRANSACTION_ID = 'transaction_id',
  /** column name */
  TRANSACTION_TYPE = 'transaction_type',
  /** column name */
  UPDATED_AT = 'updated_at',
}

/** input type for updating data in table "transactions" */
export type TransactionsSetInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  credit_card_id?: InputMaybe<Scalars['uuid']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  merchant_category?: InputMaybe<Scalars['String']['input']>;
  merchant_name?: InputMaybe<Scalars['String']['input']>;
  posted_date?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  transaction_date?: InputMaybe<Scalars['timestamptz']['input']>;
  transaction_id?: InputMaybe<Scalars['String']['input']>;
  transaction_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type TransactionsStddevFields = {
  __typename?: 'transactions_stddev_fields';
  amount: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "transactions" */
export type TransactionsStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TransactionsStddevPopFields = {
  __typename?: 'transactions_stddev_pop_fields';
  amount: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "transactions" */
export type TransactionsStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TransactionsStddevSampFields = {
  __typename?: 'transactions_stddev_samp_fields';
  amount: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "transactions" */
export type TransactionsStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "transactions" */
export type TransactionsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: TransactionsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TransactionsStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  credit_card_id?: InputMaybe<Scalars['uuid']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  merchant_category?: InputMaybe<Scalars['String']['input']>;
  merchant_name?: InputMaybe<Scalars['String']['input']>;
  posted_date?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  transaction_date?: InputMaybe<Scalars['timestamptz']['input']>;
  transaction_id?: InputMaybe<Scalars['String']['input']>;
  transaction_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type TransactionsSumFields = {
  __typename?: 'transactions_sum_fields';
  amount: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "transactions" */
export type TransactionsSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** update columns of table "transactions" */
export enum TransactionsUpdateColumn {
  /** column name */
  AMOUNT = 'amount',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  CREDIT_CARD_ID = 'credit_card_id',
  /** column name */
  CURRENCY = 'currency',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  MERCHANT_CATEGORY = 'merchant_category',
  /** column name */
  MERCHANT_NAME = 'merchant_name',
  /** column name */
  POSTED_DATE = 'posted_date',
  /** column name */
  STATUS = 'status',
  /** column name */
  TRANSACTION_DATE = 'transaction_date',
  /** column name */
  TRANSACTION_ID = 'transaction_id',
  /** column name */
  TRANSACTION_TYPE = 'transaction_type',
  /** column name */
  UPDATED_AT = 'updated_at',
}

export type TransactionsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TransactionsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TransactionsSetInput>;
  /** filter the rows which have to be updated */
  where: TransactionsBoolExp;
};

/** aggregate var_pop on columns */
export type TransactionsVarPopFields = {
  __typename?: 'transactions_var_pop_fields';
  amount: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "transactions" */
export type TransactionsVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TransactionsVarSampFields = {
  __typename?: 'transactions_var_samp_fields';
  amount: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "transactions" */
export type TransactionsVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type TransactionsVarianceFields = {
  __typename?: 'transactions_variance_fields';
  amount: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "transactions" */
export type TransactionsVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  audit_flags: Array<AuditFlags>;
  /** An aggregate relationship */
  audit_flags_aggregate: AuditFlagsAggregate;
  /** An array relationship */
  audit_trail_entries: Array<AuditTrail>;
  /** An aggregate relationship */
  audit_trail_entries_aggregate: AuditTrailAggregate;
  clerk_user_id: Scalars['String']['output'];
  created_at: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  credit_cards: Array<CreditCards>;
  /** An aggregate relationship */
  credit_cards_aggregate: CreditCardsAggregate;
  email: Scalars['String']['output'];
  full_name: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  role: Scalars['String']['output'];
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** columns and relationships of "users" */
export type UsersAuditFlagsArgs = {
  distinct_on: InputMaybe<Array<AuditFlagsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<AuditFlagsOrderBy>>;
  where: InputMaybe<AuditFlagsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersAuditFlagsAggregateArgs = {
  distinct_on: InputMaybe<Array<AuditFlagsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<AuditFlagsOrderBy>>;
  where: InputMaybe<AuditFlagsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersAuditTrailEntriesArgs = {
  distinct_on: InputMaybe<Array<AuditTrailSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<AuditTrailOrderBy>>;
  where: InputMaybe<AuditTrailBoolExp>;
};

/** columns and relationships of "users" */
export type UsersAuditTrailEntriesAggregateArgs = {
  distinct_on: InputMaybe<Array<AuditTrailSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<AuditTrailOrderBy>>;
  where: InputMaybe<AuditTrailBoolExp>;
};

/** columns and relationships of "users" */
export type UsersCreditCardsArgs = {
  distinct_on: InputMaybe<Array<CreditCardsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<CreditCardsOrderBy>>;
  where: InputMaybe<CreditCardsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersCreditCardsAggregateArgs = {
  distinct_on: InputMaybe<Array<CreditCardsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<CreditCardsOrderBy>>;
  where: InputMaybe<CreditCardsBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<UsersMaxFields>;
  min: Maybe<UsersMinFields>;
};

/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<UsersSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  audit_flags?: InputMaybe<AuditFlagsBoolExp>;
  audit_flags_aggregate?: InputMaybe<AuditFlagsAggregateBoolExp>;
  audit_trail_entries?: InputMaybe<AuditTrailBoolExp>;
  audit_trail_entries_aggregate?: InputMaybe<AuditTrailAggregateBoolExp>;
  clerk_user_id?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  credit_cards?: InputMaybe<CreditCardsBoolExp>;
  credit_cards_aggregate?: InputMaybe<CreditCardsAggregateBoolExp>;
  email?: InputMaybe<StringComparisonExp>;
  full_name?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  role?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "clerk_user_id" */
  USERS_CLERK_USER_ID_KEY = 'users_clerk_user_id_key',
  /** unique or primary key constraint on columns "id" */
  USERS_PKEY = 'users_pkey',
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  audit_flags?: InputMaybe<AuditFlagsArrRelInsertInput>;
  audit_trail_entries?: InputMaybe<AuditTrailArrRelInsertInput>;
  clerk_user_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  credit_cards?: InputMaybe<CreditCardsArrRelInsertInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields';
  clerk_user_id: Maybe<Scalars['String']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  email: Maybe<Scalars['String']['output']>;
  full_name: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  role: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'users_min_fields';
  clerk_user_id: Maybe<Scalars['String']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  email: Maybe<Scalars['String']['output']>;
  full_name: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  role: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  audit_flags_aggregate?: InputMaybe<AuditFlagsAggregateOrderBy>;
  audit_trail_entries_aggregate?: InputMaybe<AuditTrailAggregateOrderBy>;
  clerk_user_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  credit_cards_aggregate?: InputMaybe<CreditCardsAggregateOrderBy>;
  email?: InputMaybe<OrderBy>;
  full_name?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  CLERK_USER_ID = 'clerk_user_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  EMAIL = 'email',
  /** column name */
  FULL_NAME = 'full_name',
  /** column name */
  ID = 'id',
  /** column name */
  ROLE = 'role',
  /** column name */
  UPDATED_AT = 'updated_at',
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  clerk_user_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type UsersStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UsersStreamCursorValueInput = {
  clerk_user_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  CLERK_USER_ID = 'clerk_user_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  EMAIL = 'email',
  /** column name */
  FULL_NAME = 'full_name',
  /** column name */
  ID = 'id',
  /** column name */
  ROLE = 'role',
  /** column name */
  UPDATED_AT = 'updated_at',
}

export type UsersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  /** filter the rows which have to be updated */
  where: UsersBoolExp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type InsertAuditFlagMutationVariables = Exact<{
  input: AuditFlagsInsertInput;
}>;

export type InsertAuditFlagMutation = {
  __typename?: 'mutation_root';
  insert_audit_flags_one: {
    __typename?: 'audit_flags';
    id: string;
    transaction_id: string;
    flag_type: string;
    notes: string | null;
    severity: string;
    status: string;
    created_at: string | null;
  } | null;
};

export type InsertTransactionMutationVariables = Exact<{
  input: TransactionsInsertInput;
}>;

export type InsertTransactionMutation = {
  __typename?: 'mutation_root';
  insert_transactions_one: {
    __typename?: 'transactions';
    id: string;
    amount: number;
    description: string;
    merchant_name: string | null;
    merchant_category: string | null;
    transaction_type: string;
    transaction_date: string;
    credit_card_id: string;
    status: string;
    currency: string;
  } | null;
};

export const InsertAuditFlagDocument = gql`
  mutation InsertAuditFlag($input: audit_flags_insert_input!) {
    insert_audit_flags_one(object: $input) {
      id
      transaction_id
      flag_type
      notes
      severity
      status
      created_at
    }
  }
`;
export const InsertTransactionDocument = gql`
  mutation InsertTransaction($input: transactions_insert_input!) {
    insert_transactions_one(object: $input) {
      id
      amount
      description
      merchant_name
      merchant_category
      transaction_type
      transaction_date
      credit_card_id
      status
      currency
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables,
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    InsertAuditFlag(
      variables: InsertAuditFlagMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
      signal?: RequestInit['signal'],
    ): Promise<InsertAuditFlagMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InsertAuditFlagMutation>({
            document: InsertAuditFlagDocument,
            variables,
            requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
            signal,
          }),
        'InsertAuditFlag',
        'mutation',
        variables,
      );
    },
    InsertTransaction(
      variables: InsertTransactionMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
      signal?: RequestInit['signal'],
    ): Promise<InsertTransactionMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InsertTransactionMutation>({
            document: InsertTransactionDocument,
            variables,
            requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
            signal,
          }),
        'InsertTransaction',
        'mutation',
        variables,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
