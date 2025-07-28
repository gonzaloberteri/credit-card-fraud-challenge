import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: Date; output: Date; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
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
export type Int_Comparison_Exp = {
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
export type String_Comparison_Exp = {
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
export type Audit_Flags = {
  __typename?: 'audit_flags';
  /** An object relationship */
  auditor: Users;
  auditor_id: Scalars['uuid']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  flag_type: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  severity: Scalars['String']['output'];
  status: Scalars['String']['output'];
  /** An object relationship */
  transaction: Transactions;
  transaction_id: Scalars['uuid']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "audit_flags" */
export type Audit_Flags_Aggregate = {
  __typename?: 'audit_flags_aggregate';
  aggregate?: Maybe<Audit_Flags_Aggregate_Fields>;
  nodes: Array<Audit_Flags>;
};

export type Audit_Flags_Aggregate_Bool_Exp = {
  count?: InputMaybe<Audit_Flags_Aggregate_Bool_Exp_Count>;
};

export type Audit_Flags_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Audit_Flags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Audit_Flags_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "audit_flags" */
export type Audit_Flags_Aggregate_Fields = {
  __typename?: 'audit_flags_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Audit_Flags_Max_Fields>;
  min?: Maybe<Audit_Flags_Min_Fields>;
};


/** aggregate fields of "audit_flags" */
export type Audit_Flags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Audit_Flags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "audit_flags" */
export type Audit_Flags_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Audit_Flags_Max_Order_By>;
  min?: InputMaybe<Audit_Flags_Min_Order_By>;
};

/** input type for inserting array relation for remote table "audit_flags" */
export type Audit_Flags_Arr_Rel_Insert_Input = {
  data: Array<Audit_Flags_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Audit_Flags_On_Conflict>;
};

/** Boolean expression to filter rows from the table "audit_flags". All fields are combined with a logical 'AND'. */
export type Audit_Flags_Bool_Exp = {
  _and?: InputMaybe<Array<Audit_Flags_Bool_Exp>>;
  _not?: InputMaybe<Audit_Flags_Bool_Exp>;
  _or?: InputMaybe<Array<Audit_Flags_Bool_Exp>>;
  auditor?: InputMaybe<Users_Bool_Exp>;
  auditor_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  flag_type?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
  severity?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  transaction?: InputMaybe<Transactions_Bool_Exp>;
  transaction_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "audit_flags" */
export enum Audit_Flags_Constraint {
  /** unique or primary key constraint on columns "id" */
  AuditFlagsPkey = 'audit_flags_pkey'
}

/** input type for inserting data into table "audit_flags" */
export type Audit_Flags_Insert_Input = {
  auditor?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  auditor_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  flag_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  severity?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
  transaction_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Audit_Flags_Max_Fields = {
  __typename?: 'audit_flags_max_fields';
  auditor_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  flag_type?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  severity?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  transaction_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "audit_flags" */
export type Audit_Flags_Max_Order_By = {
  auditor_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  flag_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  severity?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Audit_Flags_Min_Fields = {
  __typename?: 'audit_flags_min_fields';
  auditor_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  flag_type?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  severity?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  transaction_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "audit_flags" */
export type Audit_Flags_Min_Order_By = {
  auditor_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  flag_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  severity?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "audit_flags" */
export type Audit_Flags_Mutation_Response = {
  __typename?: 'audit_flags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Audit_Flags>;
};

/** on_conflict condition type for table "audit_flags" */
export type Audit_Flags_On_Conflict = {
  constraint: Audit_Flags_Constraint;
  update_columns?: Array<Audit_Flags_Update_Column>;
  where?: InputMaybe<Audit_Flags_Bool_Exp>;
};

/** Ordering options when selecting data from "audit_flags". */
export type Audit_Flags_Order_By = {
  auditor?: InputMaybe<Users_Order_By>;
  auditor_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  flag_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  severity?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transactions_Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: audit_flags */
export type Audit_Flags_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "audit_flags" */
export enum Audit_Flags_Select_Column {
  /** column name */
  AuditorId = 'auditor_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlagType = 'flag_type',
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  Severity = 'severity',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "audit_flags" */
export type Audit_Flags_Set_Input = {
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
export type Audit_Flags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Audit_Flags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Audit_Flags_Stream_Cursor_Value_Input = {
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
export enum Audit_Flags_Update_Column {
  /** column name */
  AuditorId = 'auditor_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlagType = 'flag_type',
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  Severity = 'severity',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Audit_Flags_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Audit_Flags_Set_Input>;
  /** filter the rows which have to be updated */
  where: Audit_Flags_Bool_Exp;
};

/** columns and relationships of "audit_trail" */
export type Audit_Trail = {
  __typename?: 'audit_trail';
  action: Scalars['String']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  entity_id: Scalars['uuid']['output'];
  entity_type: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  new_values?: Maybe<Scalars['jsonb']['output']>;
  old_values?: Maybe<Scalars['jsonb']['output']>;
  performed_by?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
};


/** columns and relationships of "audit_trail" */
export type Audit_TrailMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "audit_trail" */
export type Audit_TrailNew_ValuesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "audit_trail" */
export type Audit_TrailOld_ValuesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "audit_trail" */
export type Audit_Trail_Aggregate = {
  __typename?: 'audit_trail_aggregate';
  aggregate?: Maybe<Audit_Trail_Aggregate_Fields>;
  nodes: Array<Audit_Trail>;
};

export type Audit_Trail_Aggregate_Bool_Exp = {
  count?: InputMaybe<Audit_Trail_Aggregate_Bool_Exp_Count>;
};

export type Audit_Trail_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Audit_Trail_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Audit_Trail_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "audit_trail" */
export type Audit_Trail_Aggregate_Fields = {
  __typename?: 'audit_trail_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Audit_Trail_Max_Fields>;
  min?: Maybe<Audit_Trail_Min_Fields>;
};


/** aggregate fields of "audit_trail" */
export type Audit_Trail_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Audit_Trail_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "audit_trail" */
export type Audit_Trail_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Audit_Trail_Max_Order_By>;
  min?: InputMaybe<Audit_Trail_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Audit_Trail_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  new_values?: InputMaybe<Scalars['jsonb']['input']>;
  old_values?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "audit_trail" */
export type Audit_Trail_Arr_Rel_Insert_Input = {
  data: Array<Audit_Trail_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Audit_Trail_On_Conflict>;
};

/** Boolean expression to filter rows from the table "audit_trail". All fields are combined with a logical 'AND'. */
export type Audit_Trail_Bool_Exp = {
  _and?: InputMaybe<Array<Audit_Trail_Bool_Exp>>;
  _not?: InputMaybe<Audit_Trail_Bool_Exp>;
  _or?: InputMaybe<Array<Audit_Trail_Bool_Exp>>;
  action?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  entity_id?: InputMaybe<Uuid_Comparison_Exp>;
  entity_type?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  new_values?: InputMaybe<Jsonb_Comparison_Exp>;
  old_values?: InputMaybe<Jsonb_Comparison_Exp>;
  performed_by?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "audit_trail" */
export enum Audit_Trail_Constraint {
  /** unique or primary key constraint on columns "id" */
  AuditTrailPkey = 'audit_trail_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Audit_Trail_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
  new_values?: InputMaybe<Array<Scalars['String']['input']>>;
  old_values?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Audit_Trail_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
  new_values?: InputMaybe<Scalars['Int']['input']>;
  old_values?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Audit_Trail_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
  new_values?: InputMaybe<Scalars['String']['input']>;
  old_values?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "audit_trail" */
export type Audit_Trail_Insert_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  new_values?: InputMaybe<Scalars['jsonb']['input']>;
  old_values?: InputMaybe<Scalars['jsonb']['input']>;
  performed_by?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Audit_Trail_Max_Fields = {
  __typename?: 'audit_trail_max_fields';
  action?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  entity_type?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  performed_by?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "audit_trail" */
export type Audit_Trail_Max_Order_By = {
  action?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  entity_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  performed_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Audit_Trail_Min_Fields = {
  __typename?: 'audit_trail_min_fields';
  action?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  entity_type?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  performed_by?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "audit_trail" */
export type Audit_Trail_Min_Order_By = {
  action?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  entity_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  performed_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "audit_trail" */
export type Audit_Trail_Mutation_Response = {
  __typename?: 'audit_trail_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Audit_Trail>;
};

/** on_conflict condition type for table "audit_trail" */
export type Audit_Trail_On_Conflict = {
  constraint: Audit_Trail_Constraint;
  update_columns?: Array<Audit_Trail_Update_Column>;
  where?: InputMaybe<Audit_Trail_Bool_Exp>;
};

/** Ordering options when selecting data from "audit_trail". */
export type Audit_Trail_Order_By = {
  action?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  entity_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  new_values?: InputMaybe<Order_By>;
  old_values?: InputMaybe<Order_By>;
  performed_by?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: audit_trail */
export type Audit_Trail_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Audit_Trail_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  new_values?: InputMaybe<Scalars['jsonb']['input']>;
  old_values?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "audit_trail" */
export enum Audit_Trail_Select_Column {
  /** column name */
  Action = 'action',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  EntityType = 'entity_type',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewValues = 'new_values',
  /** column name */
  OldValues = 'old_values',
  /** column name */
  PerformedBy = 'performed_by'
}

/** input type for updating data in table "audit_trail" */
export type Audit_Trail_Set_Input = {
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
export type Audit_Trail_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Audit_Trail_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Audit_Trail_Stream_Cursor_Value_Input = {
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
export enum Audit_Trail_Update_Column {
  /** column name */
  Action = 'action',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  EntityType = 'entity_type',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewValues = 'new_values',
  /** column name */
  OldValues = 'old_values',
  /** column name */
  PerformedBy = 'performed_by'
}

export type Audit_Trail_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Audit_Trail_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Audit_Trail_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Audit_Trail_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Audit_Trail_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Audit_Trail_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Audit_Trail_Set_Input>;
  /** filter the rows which have to be updated */
  where: Audit_Trail_Bool_Exp;
};

/** columns and relationships of "credit_cards" */
export type Credit_Cards = {
  __typename?: 'credit_cards';
  card_brand: Scalars['String']['output'];
  card_holder_name: Scalars['String']['output'];
  card_name: Scalars['String']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  expiry_month: Scalars['Int']['output'];
  expiry_year: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  last_four_digits: Scalars['String']['output'];
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "credit_cards" */
export type Credit_CardsTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


/** columns and relationships of "credit_cards" */
export type Credit_CardsTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** aggregated selection of "credit_cards" */
export type Credit_Cards_Aggregate = {
  __typename?: 'credit_cards_aggregate';
  aggregate?: Maybe<Credit_Cards_Aggregate_Fields>;
  nodes: Array<Credit_Cards>;
};

export type Credit_Cards_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Credit_Cards_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Credit_Cards_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Credit_Cards_Aggregate_Bool_Exp_Count>;
};

export type Credit_Cards_Aggregate_Bool_Exp_Bool_And = {
  arguments: Credit_Cards_Select_Column_Credit_Cards_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Credit_Cards_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Credit_Cards_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Credit_Cards_Select_Column_Credit_Cards_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Credit_Cards_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Credit_Cards_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Credit_Cards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Credit_Cards_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "credit_cards" */
export type Credit_Cards_Aggregate_Fields = {
  __typename?: 'credit_cards_aggregate_fields';
  avg?: Maybe<Credit_Cards_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Credit_Cards_Max_Fields>;
  min?: Maybe<Credit_Cards_Min_Fields>;
  stddev?: Maybe<Credit_Cards_Stddev_Fields>;
  stddev_pop?: Maybe<Credit_Cards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Credit_Cards_Stddev_Samp_Fields>;
  sum?: Maybe<Credit_Cards_Sum_Fields>;
  var_pop?: Maybe<Credit_Cards_Var_Pop_Fields>;
  var_samp?: Maybe<Credit_Cards_Var_Samp_Fields>;
  variance?: Maybe<Credit_Cards_Variance_Fields>;
};


/** aggregate fields of "credit_cards" */
export type Credit_Cards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Credit_Cards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "credit_cards" */
export type Credit_Cards_Aggregate_Order_By = {
  avg?: InputMaybe<Credit_Cards_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Credit_Cards_Max_Order_By>;
  min?: InputMaybe<Credit_Cards_Min_Order_By>;
  stddev?: InputMaybe<Credit_Cards_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Credit_Cards_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Credit_Cards_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Credit_Cards_Sum_Order_By>;
  var_pop?: InputMaybe<Credit_Cards_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Credit_Cards_Var_Samp_Order_By>;
  variance?: InputMaybe<Credit_Cards_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "credit_cards" */
export type Credit_Cards_Arr_Rel_Insert_Input = {
  data: Array<Credit_Cards_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Credit_Cards_On_Conflict>;
};

/** aggregate avg on columns */
export type Credit_Cards_Avg_Fields = {
  __typename?: 'credit_cards_avg_fields';
  expiry_month?: Maybe<Scalars['Float']['output']>;
  expiry_year?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "credit_cards" */
export type Credit_Cards_Avg_Order_By = {
  expiry_month?: InputMaybe<Order_By>;
  expiry_year?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "credit_cards". All fields are combined with a logical 'AND'. */
export type Credit_Cards_Bool_Exp = {
  _and?: InputMaybe<Array<Credit_Cards_Bool_Exp>>;
  _not?: InputMaybe<Credit_Cards_Bool_Exp>;
  _or?: InputMaybe<Array<Credit_Cards_Bool_Exp>>;
  card_brand?: InputMaybe<String_Comparison_Exp>;
  card_holder_name?: InputMaybe<String_Comparison_Exp>;
  card_name?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiry_month?: InputMaybe<Int_Comparison_Exp>;
  expiry_year?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  last_four_digits?: InputMaybe<String_Comparison_Exp>;
  transactions?: InputMaybe<Transactions_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "credit_cards" */
export enum Credit_Cards_Constraint {
  /** unique or primary key constraint on columns "id" */
  CreditCardsPkey = 'credit_cards_pkey'
}

/** input type for incrementing numeric columns in table "credit_cards" */
export type Credit_Cards_Inc_Input = {
  expiry_month?: InputMaybe<Scalars['Int']['input']>;
  expiry_year?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "credit_cards" */
export type Credit_Cards_Insert_Input = {
  card_brand?: InputMaybe<Scalars['String']['input']>;
  card_holder_name?: InputMaybe<Scalars['String']['input']>;
  card_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expiry_month?: InputMaybe<Scalars['Int']['input']>;
  expiry_year?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  last_four_digits?: InputMaybe<Scalars['String']['input']>;
  transactions?: InputMaybe<Transactions_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Credit_Cards_Max_Fields = {
  __typename?: 'credit_cards_max_fields';
  card_brand?: Maybe<Scalars['String']['output']>;
  card_holder_name?: Maybe<Scalars['String']['output']>;
  card_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  expiry_month?: Maybe<Scalars['Int']['output']>;
  expiry_year?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_four_digits?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "credit_cards" */
export type Credit_Cards_Max_Order_By = {
  card_brand?: InputMaybe<Order_By>;
  card_holder_name?: InputMaybe<Order_By>;
  card_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expiry_month?: InputMaybe<Order_By>;
  expiry_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_four_digits?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Credit_Cards_Min_Fields = {
  __typename?: 'credit_cards_min_fields';
  card_brand?: Maybe<Scalars['String']['output']>;
  card_holder_name?: Maybe<Scalars['String']['output']>;
  card_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  expiry_month?: Maybe<Scalars['Int']['output']>;
  expiry_year?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_four_digits?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "credit_cards" */
export type Credit_Cards_Min_Order_By = {
  card_brand?: InputMaybe<Order_By>;
  card_holder_name?: InputMaybe<Order_By>;
  card_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expiry_month?: InputMaybe<Order_By>;
  expiry_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_four_digits?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "credit_cards" */
export type Credit_Cards_Mutation_Response = {
  __typename?: 'credit_cards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Credit_Cards>;
};

/** input type for inserting object relation for remote table "credit_cards" */
export type Credit_Cards_Obj_Rel_Insert_Input = {
  data: Credit_Cards_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Credit_Cards_On_Conflict>;
};

/** on_conflict condition type for table "credit_cards" */
export type Credit_Cards_On_Conflict = {
  constraint: Credit_Cards_Constraint;
  update_columns?: Array<Credit_Cards_Update_Column>;
  where?: InputMaybe<Credit_Cards_Bool_Exp>;
};

/** Ordering options when selecting data from "credit_cards". */
export type Credit_Cards_Order_By = {
  card_brand?: InputMaybe<Order_By>;
  card_holder_name?: InputMaybe<Order_By>;
  card_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expiry_month?: InputMaybe<Order_By>;
  expiry_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  last_four_digits?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: credit_cards */
export type Credit_Cards_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "credit_cards" */
export enum Credit_Cards_Select_Column {
  /** column name */
  CardBrand = 'card_brand',
  /** column name */
  CardHolderName = 'card_holder_name',
  /** column name */
  CardName = 'card_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiryMonth = 'expiry_month',
  /** column name */
  ExpiryYear = 'expiry_year',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LastFourDigits = 'last_four_digits',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select "credit_cards_aggregate_bool_exp_bool_and_arguments_columns" columns of table "credit_cards" */
export enum Credit_Cards_Select_Column_Credit_Cards_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsActive = 'is_active'
}

/** select "credit_cards_aggregate_bool_exp_bool_or_arguments_columns" columns of table "credit_cards" */
export enum Credit_Cards_Select_Column_Credit_Cards_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsActive = 'is_active'
}

/** input type for updating data in table "credit_cards" */
export type Credit_Cards_Set_Input = {
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
export type Credit_Cards_Stddev_Fields = {
  __typename?: 'credit_cards_stddev_fields';
  expiry_month?: Maybe<Scalars['Float']['output']>;
  expiry_year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "credit_cards" */
export type Credit_Cards_Stddev_Order_By = {
  expiry_month?: InputMaybe<Order_By>;
  expiry_year?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Credit_Cards_Stddev_Pop_Fields = {
  __typename?: 'credit_cards_stddev_pop_fields';
  expiry_month?: Maybe<Scalars['Float']['output']>;
  expiry_year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "credit_cards" */
export type Credit_Cards_Stddev_Pop_Order_By = {
  expiry_month?: InputMaybe<Order_By>;
  expiry_year?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Credit_Cards_Stddev_Samp_Fields = {
  __typename?: 'credit_cards_stddev_samp_fields';
  expiry_month?: Maybe<Scalars['Float']['output']>;
  expiry_year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "credit_cards" */
export type Credit_Cards_Stddev_Samp_Order_By = {
  expiry_month?: InputMaybe<Order_By>;
  expiry_year?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "credit_cards" */
export type Credit_Cards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Credit_Cards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Credit_Cards_Stream_Cursor_Value_Input = {
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
export type Credit_Cards_Sum_Fields = {
  __typename?: 'credit_cards_sum_fields';
  expiry_month?: Maybe<Scalars['Int']['output']>;
  expiry_year?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "credit_cards" */
export type Credit_Cards_Sum_Order_By = {
  expiry_month?: InputMaybe<Order_By>;
  expiry_year?: InputMaybe<Order_By>;
};

/** update columns of table "credit_cards" */
export enum Credit_Cards_Update_Column {
  /** column name */
  CardBrand = 'card_brand',
  /** column name */
  CardHolderName = 'card_holder_name',
  /** column name */
  CardName = 'card_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiryMonth = 'expiry_month',
  /** column name */
  ExpiryYear = 'expiry_year',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LastFourDigits = 'last_four_digits',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Credit_Cards_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Credit_Cards_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Credit_Cards_Set_Input>;
  /** filter the rows which have to be updated */
  where: Credit_Cards_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Credit_Cards_Var_Pop_Fields = {
  __typename?: 'credit_cards_var_pop_fields';
  expiry_month?: Maybe<Scalars['Float']['output']>;
  expiry_year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "credit_cards" */
export type Credit_Cards_Var_Pop_Order_By = {
  expiry_month?: InputMaybe<Order_By>;
  expiry_year?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Credit_Cards_Var_Samp_Fields = {
  __typename?: 'credit_cards_var_samp_fields';
  expiry_month?: Maybe<Scalars['Float']['output']>;
  expiry_year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "credit_cards" */
export type Credit_Cards_Var_Samp_Order_By = {
  expiry_month?: InputMaybe<Order_By>;
  expiry_year?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Credit_Cards_Variance_Fields = {
  __typename?: 'credit_cards_variance_fields';
  expiry_month?: Maybe<Scalars['Float']['output']>;
  expiry_year?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "credit_cards" */
export type Credit_Cards_Variance_Order_By = {
  expiry_month?: InputMaybe<Order_By>;
  expiry_year?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
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
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "audit_flags" */
  delete_audit_flags?: Maybe<Audit_Flags_Mutation_Response>;
  /** delete single row from the table: "audit_flags" */
  delete_audit_flags_by_pk?: Maybe<Audit_Flags>;
  /** delete data from the table: "audit_trail" */
  delete_audit_trail?: Maybe<Audit_Trail_Mutation_Response>;
  /** delete single row from the table: "audit_trail" */
  delete_audit_trail_by_pk?: Maybe<Audit_Trail>;
  /** delete data from the table: "credit_cards" */
  delete_credit_cards?: Maybe<Credit_Cards_Mutation_Response>;
  /** delete single row from the table: "credit_cards" */
  delete_credit_cards_by_pk?: Maybe<Credit_Cards>;
  /** delete data from the table: "transactions" */
  delete_transactions?: Maybe<Transactions_Mutation_Response>;
  /** delete single row from the table: "transactions" */
  delete_transactions_by_pk?: Maybe<Transactions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "audit_flags" */
  insert_audit_flags?: Maybe<Audit_Flags_Mutation_Response>;
  /** insert a single row into the table: "audit_flags" */
  insert_audit_flags_one?: Maybe<Audit_Flags>;
  /** insert data into the table: "audit_trail" */
  insert_audit_trail?: Maybe<Audit_Trail_Mutation_Response>;
  /** insert a single row into the table: "audit_trail" */
  insert_audit_trail_one?: Maybe<Audit_Trail>;
  /** insert data into the table: "credit_cards" */
  insert_credit_cards?: Maybe<Credit_Cards_Mutation_Response>;
  /** insert a single row into the table: "credit_cards" */
  insert_credit_cards_one?: Maybe<Credit_Cards>;
  /** insert data into the table: "transactions" */
  insert_transactions?: Maybe<Transactions_Mutation_Response>;
  /** insert a single row into the table: "transactions" */
  insert_transactions_one?: Maybe<Transactions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "audit_flags" */
  update_audit_flags?: Maybe<Audit_Flags_Mutation_Response>;
  /** update single row of the table: "audit_flags" */
  update_audit_flags_by_pk?: Maybe<Audit_Flags>;
  /** update multiples rows of table: "audit_flags" */
  update_audit_flags_many?: Maybe<Array<Maybe<Audit_Flags_Mutation_Response>>>;
  /** update data of the table: "audit_trail" */
  update_audit_trail?: Maybe<Audit_Trail_Mutation_Response>;
  /** update single row of the table: "audit_trail" */
  update_audit_trail_by_pk?: Maybe<Audit_Trail>;
  /** update multiples rows of table: "audit_trail" */
  update_audit_trail_many?: Maybe<Array<Maybe<Audit_Trail_Mutation_Response>>>;
  /** update data of the table: "credit_cards" */
  update_credit_cards?: Maybe<Credit_Cards_Mutation_Response>;
  /** update single row of the table: "credit_cards" */
  update_credit_cards_by_pk?: Maybe<Credit_Cards>;
  /** update multiples rows of table: "credit_cards" */
  update_credit_cards_many?: Maybe<Array<Maybe<Credit_Cards_Mutation_Response>>>;
  /** update data of the table: "transactions" */
  update_transactions?: Maybe<Transactions_Mutation_Response>;
  /** update single row of the table: "transactions" */
  update_transactions_by_pk?: Maybe<Transactions>;
  /** update multiples rows of table: "transactions" */
  update_transactions_many?: Maybe<Array<Maybe<Transactions_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Audit_FlagsArgs = {
  where: Audit_Flags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Audit_Flags_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Audit_TrailArgs = {
  where: Audit_Trail_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Audit_Trail_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Credit_CardsArgs = {
  where: Credit_Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Credit_Cards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionsArgs = {
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transactions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Audit_FlagsArgs = {
  objects: Array<Audit_Flags_Insert_Input>;
  on_conflict?: InputMaybe<Audit_Flags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audit_Flags_OneArgs = {
  object: Audit_Flags_Insert_Input;
  on_conflict?: InputMaybe<Audit_Flags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audit_TrailArgs = {
  objects: Array<Audit_Trail_Insert_Input>;
  on_conflict?: InputMaybe<Audit_Trail_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audit_Trail_OneArgs = {
  object: Audit_Trail_Insert_Input;
  on_conflict?: InputMaybe<Audit_Trail_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Credit_CardsArgs = {
  objects: Array<Credit_Cards_Insert_Input>;
  on_conflict?: InputMaybe<Credit_Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Credit_Cards_OneArgs = {
  object: Credit_Cards_Insert_Input;
  on_conflict?: InputMaybe<Credit_Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionsArgs = {
  objects: Array<Transactions_Insert_Input>;
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transactions_OneArgs = {
  object: Transactions_Insert_Input;
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_FlagsArgs = {
  _set?: InputMaybe<Audit_Flags_Set_Input>;
  where: Audit_Flags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Flags_By_PkArgs = {
  _set?: InputMaybe<Audit_Flags_Set_Input>;
  pk_columns: Audit_Flags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Flags_ManyArgs = {
  updates: Array<Audit_Flags_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_TrailArgs = {
  _append?: InputMaybe<Audit_Trail_Append_Input>;
  _delete_at_path?: InputMaybe<Audit_Trail_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Audit_Trail_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Audit_Trail_Delete_Key_Input>;
  _prepend?: InputMaybe<Audit_Trail_Prepend_Input>;
  _set?: InputMaybe<Audit_Trail_Set_Input>;
  where: Audit_Trail_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Trail_By_PkArgs = {
  _append?: InputMaybe<Audit_Trail_Append_Input>;
  _delete_at_path?: InputMaybe<Audit_Trail_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Audit_Trail_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Audit_Trail_Delete_Key_Input>;
  _prepend?: InputMaybe<Audit_Trail_Prepend_Input>;
  _set?: InputMaybe<Audit_Trail_Set_Input>;
  pk_columns: Audit_Trail_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Trail_ManyArgs = {
  updates: Array<Audit_Trail_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Credit_CardsArgs = {
  _inc?: InputMaybe<Credit_Cards_Inc_Input>;
  _set?: InputMaybe<Credit_Cards_Set_Input>;
  where: Credit_Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Credit_Cards_By_PkArgs = {
  _inc?: InputMaybe<Credit_Cards_Inc_Input>;
  _set?: InputMaybe<Credit_Cards_Set_Input>;
  pk_columns: Credit_Cards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Credit_Cards_ManyArgs = {
  updates: Array<Credit_Cards_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionsArgs = {
  _inc?: InputMaybe<Transactions_Inc_Input>;
  _set?: InputMaybe<Transactions_Set_Input>;
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transactions_By_PkArgs = {
  _inc?: InputMaybe<Transactions_Inc_Input>;
  _set?: InputMaybe<Transactions_Set_Input>;
  pk_columns: Transactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transactions_ManyArgs = {
  updates: Array<Transactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
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
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  audit_flags: Array<Audit_Flags>;
  /** An aggregate relationship */
  audit_flags_aggregate: Audit_Flags_Aggregate;
  /** fetch data from the table: "audit_flags" using primary key columns */
  audit_flags_by_pk?: Maybe<Audit_Flags>;
  /** fetch data from the table: "audit_trail" */
  audit_trail: Array<Audit_Trail>;
  /** fetch aggregated fields from the table: "audit_trail" */
  audit_trail_aggregate: Audit_Trail_Aggregate;
  /** fetch data from the table: "audit_trail" using primary key columns */
  audit_trail_by_pk?: Maybe<Audit_Trail>;
  /** An array relationship */
  credit_cards: Array<Credit_Cards>;
  /** An aggregate relationship */
  credit_cards_aggregate: Credit_Cards_Aggregate;
  /** fetch data from the table: "credit_cards" using primary key columns */
  credit_cards_by_pk?: Maybe<Credit_Cards>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAudit_FlagsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Flags_Order_By>>;
  where?: InputMaybe<Audit_Flags_Bool_Exp>;
};


export type Query_RootAudit_Flags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Flags_Order_By>>;
  where?: InputMaybe<Audit_Flags_Bool_Exp>;
};


export type Query_RootAudit_Flags_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAudit_TrailArgs = {
  distinct_on?: InputMaybe<Array<Audit_Trail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Trail_Order_By>>;
  where?: InputMaybe<Audit_Trail_Bool_Exp>;
};


export type Query_RootAudit_Trail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Trail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Trail_Order_By>>;
  where?: InputMaybe<Audit_Trail_Bool_Exp>;
};


export type Query_RootAudit_Trail_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCredit_CardsArgs = {
  distinct_on?: InputMaybe<Array<Credit_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Cards_Order_By>>;
  where?: InputMaybe<Credit_Cards_Bool_Exp>;
};


export type Query_RootCredit_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Credit_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Cards_Order_By>>;
  where?: InputMaybe<Credit_Cards_Bool_Exp>;
};


export type Query_RootCredit_Cards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Query_RootTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Query_RootTransactions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  audit_flags: Array<Audit_Flags>;
  /** An aggregate relationship */
  audit_flags_aggregate: Audit_Flags_Aggregate;
  /** fetch data from the table: "audit_flags" using primary key columns */
  audit_flags_by_pk?: Maybe<Audit_Flags>;
  /** fetch data from the table in a streaming manner: "audit_flags" */
  audit_flags_stream: Array<Audit_Flags>;
  /** fetch data from the table: "audit_trail" */
  audit_trail: Array<Audit_Trail>;
  /** fetch aggregated fields from the table: "audit_trail" */
  audit_trail_aggregate: Audit_Trail_Aggregate;
  /** fetch data from the table: "audit_trail" using primary key columns */
  audit_trail_by_pk?: Maybe<Audit_Trail>;
  /** fetch data from the table in a streaming manner: "audit_trail" */
  audit_trail_stream: Array<Audit_Trail>;
  /** An array relationship */
  credit_cards: Array<Credit_Cards>;
  /** An aggregate relationship */
  credit_cards_aggregate: Credit_Cards_Aggregate;
  /** fetch data from the table: "credit_cards" using primary key columns */
  credit_cards_by_pk?: Maybe<Credit_Cards>;
  /** fetch data from the table in a streaming manner: "credit_cards" */
  credit_cards_stream: Array<Credit_Cards>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table in a streaming manner: "transactions" */
  transactions_stream: Array<Transactions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootAudit_FlagsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Flags_Order_By>>;
  where?: InputMaybe<Audit_Flags_Bool_Exp>;
};


export type Subscription_RootAudit_Flags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Flags_Order_By>>;
  where?: InputMaybe<Audit_Flags_Bool_Exp>;
};


export type Subscription_RootAudit_Flags_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAudit_Flags_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Audit_Flags_Stream_Cursor_Input>>;
  where?: InputMaybe<Audit_Flags_Bool_Exp>;
};


export type Subscription_RootAudit_TrailArgs = {
  distinct_on?: InputMaybe<Array<Audit_Trail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Trail_Order_By>>;
  where?: InputMaybe<Audit_Trail_Bool_Exp>;
};


export type Subscription_RootAudit_Trail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Trail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Trail_Order_By>>;
  where?: InputMaybe<Audit_Trail_Bool_Exp>;
};


export type Subscription_RootAudit_Trail_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAudit_Trail_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Audit_Trail_Stream_Cursor_Input>>;
  where?: InputMaybe<Audit_Trail_Bool_Exp>;
};


export type Subscription_RootCredit_CardsArgs = {
  distinct_on?: InputMaybe<Array<Credit_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Cards_Order_By>>;
  where?: InputMaybe<Credit_Cards_Bool_Exp>;
};


export type Subscription_RootCredit_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Credit_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Cards_Order_By>>;
  where?: InputMaybe<Credit_Cards_Bool_Exp>;
};


export type Subscription_RootCredit_Cards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCredit_Cards_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Credit_Cards_Stream_Cursor_Input>>;
  where?: InputMaybe<Credit_Cards_Bool_Exp>;
};


export type Subscription_RootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootTransactions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTransactions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
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
  audit_flags: Array<Audit_Flags>;
  /** An aggregate relationship */
  audit_flags_aggregate: Audit_Flags_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  credit_card: Credit_Cards;
  credit_card_id: Scalars['uuid']['output'];
  currency: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  merchant_category?: Maybe<Scalars['String']['output']>;
  merchant_name?: Maybe<Scalars['String']['output']>;
  posted_date?: Maybe<Scalars['timestamptz']['output']>;
  status: Scalars['String']['output'];
  transaction_date: Scalars['timestamptz']['output'];
  transaction_id?: Maybe<Scalars['String']['output']>;
  transaction_type: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "transactions" */
export type TransactionsAudit_FlagsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Flags_Order_By>>;
  where?: InputMaybe<Audit_Flags_Bool_Exp>;
};


/** columns and relationships of "transactions" */
export type TransactionsAudit_Flags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Flags_Order_By>>;
  where?: InputMaybe<Audit_Flags_Bool_Exp>;
};

/** aggregated selection of "transactions" */
export type Transactions_Aggregate = {
  __typename?: 'transactions_aggregate';
  aggregate?: Maybe<Transactions_Aggregate_Fields>;
  nodes: Array<Transactions>;
};

export type Transactions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Transactions_Aggregate_Bool_Exp_Count>;
};

export type Transactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_Fields = {
  __typename?: 'transactions_aggregate_fields';
  avg?: Maybe<Transactions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Transactions_Max_Fields>;
  min?: Maybe<Transactions_Min_Fields>;
  stddev?: Maybe<Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Transactions_Sum_Fields>;
  var_pop?: Maybe<Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Transactions_Var_Samp_Fields>;
  variance?: Maybe<Transactions_Variance_Fields>;
};


/** aggregate fields of "transactions" */
export type Transactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "transactions" */
export type Transactions_Aggregate_Order_By = {
  avg?: InputMaybe<Transactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transactions_Max_Order_By>;
  min?: InputMaybe<Transactions_Min_Order_By>;
  stddev?: InputMaybe<Transactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transactions_Sum_Order_By>;
  var_pop?: InputMaybe<Transactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Transactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transactions" */
export type Transactions_Arr_Rel_Insert_Input = {
  data: Array<Transactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Transactions_Avg_Fields = {
  __typename?: 'transactions_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "transactions" */
export type Transactions_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Transactions_Bool_Exp>>;
  _not?: InputMaybe<Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Transactions_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  audit_flags?: InputMaybe<Audit_Flags_Bool_Exp>;
  audit_flags_aggregate?: InputMaybe<Audit_Flags_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  credit_card?: InputMaybe<Credit_Cards_Bool_Exp>;
  credit_card_id?: InputMaybe<Uuid_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  merchant_category?: InputMaybe<String_Comparison_Exp>;
  merchant_name?: InputMaybe<String_Comparison_Exp>;
  posted_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  transaction_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  transaction_id?: InputMaybe<String_Comparison_Exp>;
  transaction_type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "transactions" */
export enum Transactions_Constraint {
  /** unique or primary key constraint on columns "id" */
  TransactionsPkey = 'transactions_pkey',
  /** unique or primary key constraint on columns "transaction_id" */
  TransactionsTransactionIdKey = 'transactions_transaction_id_key'
}

/** input type for incrementing numeric columns in table "transactions" */
export type Transactions_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "transactions" */
export type Transactions_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  audit_flags?: InputMaybe<Audit_Flags_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  credit_card?: InputMaybe<Credit_Cards_Obj_Rel_Insert_Input>;
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
export type Transactions_Max_Fields = {
  __typename?: 'transactions_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  credit_card_id?: Maybe<Scalars['uuid']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  merchant_category?: Maybe<Scalars['String']['output']>;
  merchant_name?: Maybe<Scalars['String']['output']>;
  posted_date?: Maybe<Scalars['timestamptz']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  transaction_date?: Maybe<Scalars['timestamptz']['output']>;
  transaction_id?: Maybe<Scalars['String']['output']>;
  transaction_type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "transactions" */
export type Transactions_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  credit_card_id?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  merchant_category?: InputMaybe<Order_By>;
  merchant_name?: InputMaybe<Order_By>;
  posted_date?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename?: 'transactions_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  credit_card_id?: Maybe<Scalars['uuid']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  merchant_category?: Maybe<Scalars['String']['output']>;
  merchant_name?: Maybe<Scalars['String']['output']>;
  posted_date?: Maybe<Scalars['timestamptz']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  transaction_date?: Maybe<Scalars['timestamptz']['output']>;
  transaction_id?: Maybe<Scalars['String']['output']>;
  transaction_type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "transactions" */
export type Transactions_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  credit_card_id?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  merchant_category?: InputMaybe<Order_By>;
  merchant_name?: InputMaybe<Order_By>;
  posted_date?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transactions" */
export type Transactions_Mutation_Response = {
  __typename?: 'transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Transactions>;
};

/** input type for inserting object relation for remote table "transactions" */
export type Transactions_Obj_Rel_Insert_Input = {
  data: Transactions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** on_conflict condition type for table "transactions" */
export type Transactions_On_Conflict = {
  constraint: Transactions_Constraint;
  update_columns?: Array<Transactions_Update_Column>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "transactions". */
export type Transactions_Order_By = {
  amount?: InputMaybe<Order_By>;
  audit_flags_aggregate?: InputMaybe<Audit_Flags_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  credit_card?: InputMaybe<Credit_Cards_Order_By>;
  credit_card_id?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  merchant_category?: InputMaybe<Order_By>;
  merchant_name?: InputMaybe<Order_By>;
  posted_date?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transactions */
export type Transactions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "transactions" */
export enum Transactions_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditCardId = 'credit_card_id',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  MerchantCategory = 'merchant_category',
  /** column name */
  MerchantName = 'merchant_name',
  /** column name */
  PostedDate = 'posted_date',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionDate = 'transaction_date',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "transactions" */
export type Transactions_Set_Input = {
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
export type Transactions_Stddev_Fields = {
  __typename?: 'transactions_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "transactions" */
export type Transactions_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transactions_Stddev_Pop_Fields = {
  __typename?: 'transactions_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "transactions" */
export type Transactions_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transactions_Stddev_Samp_Fields = {
  __typename?: 'transactions_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "transactions" */
export type Transactions_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transactions" */
export type Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transactions_Stream_Cursor_Value_Input = {
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
export type Transactions_Sum_Fields = {
  __typename?: 'transactions_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "transactions" */
export type Transactions_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** update columns of table "transactions" */
export enum Transactions_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditCardId = 'credit_card_id',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  MerchantCategory = 'merchant_category',
  /** column name */
  MerchantName = 'merchant_name',
  /** column name */
  PostedDate = 'posted_date',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionDate = 'transaction_date',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Transactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Transactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transactions_Var_Pop_Fields = {
  __typename?: 'transactions_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "transactions" */
export type Transactions_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transactions_Var_Samp_Fields = {
  __typename?: 'transactions_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "transactions" */
export type Transactions_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transactions_Variance_Fields = {
  __typename?: 'transactions_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "transactions" */
export type Transactions_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  audit_flags: Array<Audit_Flags>;
  /** An aggregate relationship */
  audit_flags_aggregate: Audit_Flags_Aggregate;
  /** An array relationship */
  audit_trail_entries: Array<Audit_Trail>;
  /** An aggregate relationship */
  audit_trail_entries_aggregate: Audit_Trail_Aggregate;
  clerk_user_id: Scalars['String']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  credit_cards: Array<Credit_Cards>;
  /** An aggregate relationship */
  credit_cards_aggregate: Credit_Cards_Aggregate;
  email: Scalars['String']['output'];
  full_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  role: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "users" */
export type UsersAudit_FlagsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Flags_Order_By>>;
  where?: InputMaybe<Audit_Flags_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAudit_Flags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Flags_Order_By>>;
  where?: InputMaybe<Audit_Flags_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAudit_Trail_EntriesArgs = {
  distinct_on?: InputMaybe<Array<Audit_Trail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Trail_Order_By>>;
  where?: InputMaybe<Audit_Trail_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAudit_Trail_Entries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Trail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Trail_Order_By>>;
  where?: InputMaybe<Audit_Trail_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCredit_CardsArgs = {
  distinct_on?: InputMaybe<Array<Credit_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Cards_Order_By>>;
  where?: InputMaybe<Credit_Cards_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCredit_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Credit_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Cards_Order_By>>;
  where?: InputMaybe<Credit_Cards_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  audit_flags?: InputMaybe<Audit_Flags_Bool_Exp>;
  audit_flags_aggregate?: InputMaybe<Audit_Flags_Aggregate_Bool_Exp>;
  audit_trail_entries?: InputMaybe<Audit_Trail_Bool_Exp>;
  audit_trail_entries_aggregate?: InputMaybe<Audit_Trail_Aggregate_Bool_Exp>;
  clerk_user_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  credit_cards?: InputMaybe<Credit_Cards_Bool_Exp>;
  credit_cards_aggregate?: InputMaybe<Credit_Cards_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  full_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "clerk_user_id" */
  UsersClerkUserIdKey = 'users_clerk_user_id_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  audit_flags?: InputMaybe<Audit_Flags_Arr_Rel_Insert_Input>;
  audit_trail_entries?: InputMaybe<Audit_Trail_Arr_Rel_Insert_Input>;
  clerk_user_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  credit_cards?: InputMaybe<Credit_Cards_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  clerk_user_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  clerk_user_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  audit_flags_aggregate?: InputMaybe<Audit_Flags_Aggregate_Order_By>;
  audit_trail_entries_aggregate?: InputMaybe<Audit_Trail_Aggregate_Order_By>;
  clerk_user_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  credit_cards_aggregate?: InputMaybe<Credit_Cards_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  ClerkUserId = 'clerk_user_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  clerk_user_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  clerk_user_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  ClerkUserId = 'clerk_user_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
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
  object: Audit_Flags_Insert_Input;
}>;


export type InsertAuditFlagMutation = { __typename?: 'mutation_root', insert_audit_flags_one?: { __typename?: 'audit_flags', id: any, flag_type: string, notes?: string | null, severity: string, status: string, created_at?: Date | null } | null };

export type UpdateAuditFlagMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  updates: Audit_Flags_Set_Input;
}>;


export type UpdateAuditFlagMutation = { __typename?: 'mutation_root', update_audit_flags_by_pk?: { __typename?: 'audit_flags', id: any, flag_type: string, notes?: string | null, severity: string, status: string, updated_at?: Date | null } | null };

export type GetAuditorCreditCardsWithTransactionsQueryVariables = Exact<{
  currentMonth: Scalars['timestamptz']['input'];
  nextMonth: Scalars['timestamptz']['input'];
}>;


export type GetAuditorCreditCardsWithTransactionsQuery = { __typename?: 'query_root', credit_cards: Array<{ __typename?: 'credit_cards', id: any, card_name: string, card_brand: string, last_four_digits: string, card_holder_name: string, expiry_month: number, expiry_year: number, is_active?: boolean | null, created_at?: Date | null, updated_at?: Date | null, user: { __typename?: 'users', id: any, clerk_user_id: string, email: string, full_name?: string | null, role: string }, transactions: Array<{ __typename?: 'transactions', id: any, transaction_id?: string | null, amount: any, currency: string, description: string, merchant_name?: string | null, merchant_category?: string | null, transaction_date: Date, posted_date?: Date | null, transaction_type: string, status: string, created_at?: Date | null, updated_at?: Date | null, audit_flags: Array<{ __typename?: 'audit_flags', id: any, flag_type: string, notes?: string | null, severity: string, status: string, created_at?: Date | null, auditor: { __typename?: 'users', full_name?: string | null, email: string } }> }> }> };

export type GetCreditCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCreditCardsQuery = { __typename?: 'query_root', credit_cards: Array<{ __typename?: 'credit_cards', id: any, card_name: string, card_brand: string, last_four_digits: string, card_holder_name: string, user: { __typename?: 'users', id: any, full_name?: string | null, email: string } }> };

export type GetCreditCardsWithTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCreditCardsWithTransactionsQuery = { __typename?: 'query_root', credit_cards: Array<{ __typename?: 'credit_cards', id: any, card_name: string, card_brand: string, last_four_digits: string, card_holder_name: string, user: { __typename?: 'users', id: any, full_name?: string | null, email: string }, transactions: Array<{ __typename?: 'transactions', id: any, transaction_id?: string | null, amount: any, currency: string, description: string, merchant_name?: string | null, merchant_category?: string | null, transaction_date: Date, posted_date?: Date | null, transaction_type: string, status: string, audit_flags: Array<{ __typename?: 'audit_flags', id: any, flag_type: string, notes?: string | null, severity: string, status: string, created_at?: Date | null, auditor: { __typename?: 'users', full_name?: string | null } }> }> }> };

export type TransactionsSubscriptionSubscriptionVariables = Exact<{
  where?: InputMaybe<Transactions_Bool_Exp>;
}>;


export type TransactionsSubscriptionSubscription = { __typename?: 'subscription_root', transactions: Array<{ __typename?: 'transactions', id: any, transaction_id?: string | null, amount: any, currency: string, description: string, merchant_name?: string | null, merchant_category?: string | null, transaction_date: Date, posted_date?: Date | null, transaction_type: string, status: string, credit_card: { __typename?: 'credit_cards', id: any, card_name: string, card_brand: string, last_four_digits: string, user: { __typename?: 'users', full_name?: string | null, email: string } }, audit_flags: Array<{ __typename?: 'audit_flags', id: any, flag_type: string, notes?: string | null, severity: string, status: string, created_at?: Date | null, auditor: { __typename?: 'users', full_name?: string | null } }> }> };


export const InsertAuditFlagDocument = gql`
    mutation InsertAuditFlag($object: audit_flags_insert_input!) {
  insert_audit_flags_one(object: $object) {
    id
    flag_type
    notes
    severity
    status
    created_at
  }
}
    `;
export type InsertAuditFlagMutationFn = Apollo.MutationFunction<InsertAuditFlagMutation, InsertAuditFlagMutationVariables>;

/**
 * __useInsertAuditFlagMutation__
 *
 * To run a mutation, you first call `useInsertAuditFlagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertAuditFlagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertAuditFlagMutation, { data, loading, error }] = useInsertAuditFlagMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertAuditFlagMutation(baseOptions?: Apollo.MutationHookOptions<InsertAuditFlagMutation, InsertAuditFlagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertAuditFlagMutation, InsertAuditFlagMutationVariables>(InsertAuditFlagDocument, options);
      }
export type InsertAuditFlagMutationHookResult = ReturnType<typeof useInsertAuditFlagMutation>;
export type InsertAuditFlagMutationResult = Apollo.MutationResult<InsertAuditFlagMutation>;
export type InsertAuditFlagMutationOptions = Apollo.BaseMutationOptions<InsertAuditFlagMutation, InsertAuditFlagMutationVariables>;
export const UpdateAuditFlagDocument = gql`
    mutation UpdateAuditFlag($id: uuid!, $updates: audit_flags_set_input!) {
  update_audit_flags_by_pk(pk_columns: {id: $id}, _set: $updates) {
    id
    flag_type
    notes
    severity
    status
    updated_at
  }
}
    `;
export type UpdateAuditFlagMutationFn = Apollo.MutationFunction<UpdateAuditFlagMutation, UpdateAuditFlagMutationVariables>;

/**
 * __useUpdateAuditFlagMutation__
 *
 * To run a mutation, you first call `useUpdateAuditFlagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAuditFlagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAuditFlagMutation, { data, loading, error }] = useUpdateAuditFlagMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updates: // value for 'updates'
 *   },
 * });
 */
export function useUpdateAuditFlagMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAuditFlagMutation, UpdateAuditFlagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAuditFlagMutation, UpdateAuditFlagMutationVariables>(UpdateAuditFlagDocument, options);
      }
export type UpdateAuditFlagMutationHookResult = ReturnType<typeof useUpdateAuditFlagMutation>;
export type UpdateAuditFlagMutationResult = Apollo.MutationResult<UpdateAuditFlagMutation>;
export type UpdateAuditFlagMutationOptions = Apollo.BaseMutationOptions<UpdateAuditFlagMutation, UpdateAuditFlagMutationVariables>;
export const GetAuditorCreditCardsWithTransactionsDocument = gql`
    query GetAuditorCreditCardsWithTransactions($currentMonth: timestamptz!, $nextMonth: timestamptz!) {
  credit_cards {
    id
    card_name
    card_brand
    last_four_digits
    card_holder_name
    expiry_month
    expiry_year
    is_active
    created_at
    updated_at
    user {
      id
      clerk_user_id
      email
      full_name
      role
    }
    transactions(
      where: {transaction_date: {_gte: $currentMonth, _lt: $nextMonth}}
      order_by: {transaction_date: desc}
    ) {
      id
      transaction_id
      amount
      currency
      description
      merchant_name
      merchant_category
      transaction_date
      posted_date
      transaction_type
      status
      created_at
      updated_at
      audit_flags {
        id
        flag_type
        notes
        severity
        status
        created_at
        auditor {
          full_name
          email
        }
      }
    }
  }
}
    `;

/**
 * __useGetAuditorCreditCardsWithTransactionsQuery__
 *
 * To run a query within a React component, call `useGetAuditorCreditCardsWithTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuditorCreditCardsWithTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuditorCreditCardsWithTransactionsQuery({
 *   variables: {
 *      currentMonth: // value for 'currentMonth'
 *      nextMonth: // value for 'nextMonth'
 *   },
 * });
 */
export function useGetAuditorCreditCardsWithTransactionsQuery(baseOptions: Apollo.QueryHookOptions<GetAuditorCreditCardsWithTransactionsQuery, GetAuditorCreditCardsWithTransactionsQueryVariables> & ({ variables: GetAuditorCreditCardsWithTransactionsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuditorCreditCardsWithTransactionsQuery, GetAuditorCreditCardsWithTransactionsQueryVariables>(GetAuditorCreditCardsWithTransactionsDocument, options);
      }
export function useGetAuditorCreditCardsWithTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuditorCreditCardsWithTransactionsQuery, GetAuditorCreditCardsWithTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuditorCreditCardsWithTransactionsQuery, GetAuditorCreditCardsWithTransactionsQueryVariables>(GetAuditorCreditCardsWithTransactionsDocument, options);
        }
export function useGetAuditorCreditCardsWithTransactionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAuditorCreditCardsWithTransactionsQuery, GetAuditorCreditCardsWithTransactionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAuditorCreditCardsWithTransactionsQuery, GetAuditorCreditCardsWithTransactionsQueryVariables>(GetAuditorCreditCardsWithTransactionsDocument, options);
        }
export type GetAuditorCreditCardsWithTransactionsQueryHookResult = ReturnType<typeof useGetAuditorCreditCardsWithTransactionsQuery>;
export type GetAuditorCreditCardsWithTransactionsLazyQueryHookResult = ReturnType<typeof useGetAuditorCreditCardsWithTransactionsLazyQuery>;
export type GetAuditorCreditCardsWithTransactionsSuspenseQueryHookResult = ReturnType<typeof useGetAuditorCreditCardsWithTransactionsSuspenseQuery>;
export type GetAuditorCreditCardsWithTransactionsQueryResult = Apollo.QueryResult<GetAuditorCreditCardsWithTransactionsQuery, GetAuditorCreditCardsWithTransactionsQueryVariables>;
export const GetCreditCardsDocument = gql`
    query GetCreditCards {
  credit_cards(order_by: {created_at: asc}) {
    id
    card_name
    card_brand
    last_four_digits
    card_holder_name
    user {
      id
      full_name
      email
    }
  }
}
    `;

/**
 * __useGetCreditCardsQuery__
 *
 * To run a query within a React component, call `useGetCreditCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCreditCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCreditCardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCreditCardsQuery(baseOptions?: Apollo.QueryHookOptions<GetCreditCardsQuery, GetCreditCardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCreditCardsQuery, GetCreditCardsQueryVariables>(GetCreditCardsDocument, options);
      }
export function useGetCreditCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCreditCardsQuery, GetCreditCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCreditCardsQuery, GetCreditCardsQueryVariables>(GetCreditCardsDocument, options);
        }
export function useGetCreditCardsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCreditCardsQuery, GetCreditCardsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCreditCardsQuery, GetCreditCardsQueryVariables>(GetCreditCardsDocument, options);
        }
export type GetCreditCardsQueryHookResult = ReturnType<typeof useGetCreditCardsQuery>;
export type GetCreditCardsLazyQueryHookResult = ReturnType<typeof useGetCreditCardsLazyQuery>;
export type GetCreditCardsSuspenseQueryHookResult = ReturnType<typeof useGetCreditCardsSuspenseQuery>;
export type GetCreditCardsQueryResult = Apollo.QueryResult<GetCreditCardsQuery, GetCreditCardsQueryVariables>;
export const GetCreditCardsWithTransactionsDocument = gql`
    query GetCreditCardsWithTransactions {
  credit_cards(order_by: {created_at: asc}) {
    id
    card_name
    card_brand
    last_four_digits
    card_holder_name
    user {
      id
      full_name
      email
    }
    transactions(order_by: {transaction_date: desc}) {
      id
      transaction_id
      amount
      currency
      description
      merchant_name
      merchant_category
      transaction_date
      posted_date
      transaction_type
      status
      audit_flags {
        id
        flag_type
        notes
        severity
        status
        created_at
        auditor {
          full_name
        }
      }
    }
  }
}
    `;

/**
 * __useGetCreditCardsWithTransactionsQuery__
 *
 * To run a query within a React component, call `useGetCreditCardsWithTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCreditCardsWithTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCreditCardsWithTransactionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCreditCardsWithTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<GetCreditCardsWithTransactionsQuery, GetCreditCardsWithTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCreditCardsWithTransactionsQuery, GetCreditCardsWithTransactionsQueryVariables>(GetCreditCardsWithTransactionsDocument, options);
      }
export function useGetCreditCardsWithTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCreditCardsWithTransactionsQuery, GetCreditCardsWithTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCreditCardsWithTransactionsQuery, GetCreditCardsWithTransactionsQueryVariables>(GetCreditCardsWithTransactionsDocument, options);
        }
export function useGetCreditCardsWithTransactionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCreditCardsWithTransactionsQuery, GetCreditCardsWithTransactionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCreditCardsWithTransactionsQuery, GetCreditCardsWithTransactionsQueryVariables>(GetCreditCardsWithTransactionsDocument, options);
        }
export type GetCreditCardsWithTransactionsQueryHookResult = ReturnType<typeof useGetCreditCardsWithTransactionsQuery>;
export type GetCreditCardsWithTransactionsLazyQueryHookResult = ReturnType<typeof useGetCreditCardsWithTransactionsLazyQuery>;
export type GetCreditCardsWithTransactionsSuspenseQueryHookResult = ReturnType<typeof useGetCreditCardsWithTransactionsSuspenseQuery>;
export type GetCreditCardsWithTransactionsQueryResult = Apollo.QueryResult<GetCreditCardsWithTransactionsQuery, GetCreditCardsWithTransactionsQueryVariables>;
export const TransactionsSubscriptionDocument = gql`
    subscription TransactionsSubscription($where: transactions_bool_exp) {
  transactions(where: $where, order_by: {transaction_date: desc}) {
    id
    transaction_id
    amount
    currency
    description
    merchant_name
    merchant_category
    transaction_date
    posted_date
    transaction_type
    status
    credit_card {
      id
      card_name
      card_brand
      last_four_digits
      user {
        full_name
        email
      }
    }
    audit_flags {
      id
      flag_type
      notes
      severity
      status
      created_at
      auditor {
        full_name
      }
    }
  }
}
    `;

/**
 * __useTransactionsSubscriptionSubscription__
 *
 * To run a query within a React component, call `useTransactionsSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsSubscriptionSubscription({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTransactionsSubscriptionSubscription(baseOptions?: Apollo.SubscriptionHookOptions<TransactionsSubscriptionSubscription, TransactionsSubscriptionSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TransactionsSubscriptionSubscription, TransactionsSubscriptionSubscriptionVariables>(TransactionsSubscriptionDocument, options);
      }
export type TransactionsSubscriptionSubscriptionHookResult = ReturnType<typeof useTransactionsSubscriptionSubscription>;
export type TransactionsSubscriptionSubscriptionResult = Apollo.SubscriptionResult<TransactionsSubscriptionSubscription>;