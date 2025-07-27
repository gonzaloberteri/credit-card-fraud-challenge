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
  bigint: { input: number; output: number; }
  date: { input: any; output: any; }
  json: { input: any; output: any; }
  jsonb: { input: any; output: any; }
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
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
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

/** columns and relationships of "action_logs" */
export type Action_Logs = {
  __typename?: 'action_logs';
  date: Scalars['timestamptz']['output'];
  extra_data?: Maybe<Scalars['json']['output']>;
  id: Scalars['uuid']['output'];
  provider: Providers_Enum;
  type: Action_Type_Enum;
};


/** columns and relationships of "action_logs" */
export type Action_LogsExtra_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "action_logs" */
export type Action_Logs_Aggregate = {
  __typename?: 'action_logs_aggregate';
  aggregate?: Maybe<Action_Logs_Aggregate_Fields>;
  nodes: Array<Action_Logs>;
};

/** aggregate fields of "action_logs" */
export type Action_Logs_Aggregate_Fields = {
  __typename?: 'action_logs_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Action_Logs_Max_Fields>;
  min?: Maybe<Action_Logs_Min_Fields>;
};


/** aggregate fields of "action_logs" */
export type Action_Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Action_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "action_logs". All fields are combined with a logical 'AND'. */
export type Action_Logs_Bool_Exp = {
  _and?: InputMaybe<Array<Action_Logs_Bool_Exp>>;
  _not?: InputMaybe<Action_Logs_Bool_Exp>;
  _or?: InputMaybe<Array<Action_Logs_Bool_Exp>>;
  date?: InputMaybe<Timestamptz_Comparison_Exp>;
  extra_data?: InputMaybe<Json_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<Providers_Enum_Comparison_Exp>;
  type?: InputMaybe<Action_Type_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "action_logs" */
export enum Action_Logs_Constraint {
  /** unique or primary key constraint on columns "id" */
  ActionLogsPkey = 'action_logs_pkey'
}

/** input type for inserting data into table "action_logs" */
export type Action_Logs_Insert_Input = {
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  extra_data?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider?: InputMaybe<Providers_Enum>;
  type?: InputMaybe<Action_Type_Enum>;
};

/** aggregate max on columns */
export type Action_Logs_Max_Fields = {
  __typename?: 'action_logs_max_fields';
  date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Action_Logs_Min_Fields = {
  __typename?: 'action_logs_min_fields';
  date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "action_logs" */
export type Action_Logs_Mutation_Response = {
  __typename?: 'action_logs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Action_Logs>;
};

/** on_conflict condition type for table "action_logs" */
export type Action_Logs_On_Conflict = {
  constraint: Action_Logs_Constraint;
  update_columns?: Array<Action_Logs_Update_Column>;
  where?: InputMaybe<Action_Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "action_logs". */
export type Action_Logs_Order_By = {
  date?: InputMaybe<Order_By>;
  extra_data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: action_logs */
export type Action_Logs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "action_logs" */
export enum Action_Logs_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  ExtraData = 'extra_data',
  /** column name */
  Id = 'id',
  /** column name */
  Provider = 'provider',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "action_logs" */
export type Action_Logs_Set_Input = {
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  extra_data?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider?: InputMaybe<Providers_Enum>;
  type?: InputMaybe<Action_Type_Enum>;
};

/** Streaming cursor of the table "action_logs" */
export type Action_Logs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Action_Logs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Action_Logs_Stream_Cursor_Value_Input = {
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  extra_data?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider?: InputMaybe<Providers_Enum>;
  type?: InputMaybe<Action_Type_Enum>;
};

/** update columns of table "action_logs" */
export enum Action_Logs_Update_Column {
  /** column name */
  Date = 'date',
  /** column name */
  ExtraData = 'extra_data',
  /** column name */
  Id = 'id',
  /** column name */
  Provider = 'provider',
  /** column name */
  Type = 'type'
}

export type Action_Logs_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Action_Logs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Action_Logs_Bool_Exp;
};

/** columns and relationships of "action_type" */
export type Action_Type = {
  __typename?: 'action_type';
  value: Scalars['String']['output'];
};

/** aggregated selection of "action_type" */
export type Action_Type_Aggregate = {
  __typename?: 'action_type_aggregate';
  aggregate?: Maybe<Action_Type_Aggregate_Fields>;
  nodes: Array<Action_Type>;
};

/** aggregate fields of "action_type" */
export type Action_Type_Aggregate_Fields = {
  __typename?: 'action_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Action_Type_Max_Fields>;
  min?: Maybe<Action_Type_Min_Fields>;
};


/** aggregate fields of "action_type" */
export type Action_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Action_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "action_type". All fields are combined with a logical 'AND'. */
export type Action_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Action_Type_Bool_Exp>>;
  _not?: InputMaybe<Action_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Action_Type_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "action_type" */
export enum Action_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  ActionTypePkey = 'action_type_pkey'
}

export enum Action_Type_Enum {
  UserCreatedFromWebhook = 'USER_CREATED_FROM_WEBHOOK',
  UserDeletedFromWebhook = 'USER_DELETED_FROM_WEBHOOK',
  UserFetchedFromApi = 'USER_FETCHED_FROM_API',
  UserUpdatedFromWebhook = 'USER_UPDATED_FROM_WEBHOOK'
}

/** Boolean expression to compare columns of type "action_type_enum". All fields are combined with logical 'AND'. */
export type Action_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Action_Type_Enum>;
  _in?: InputMaybe<Array<Action_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Action_Type_Enum>;
  _nin?: InputMaybe<Array<Action_Type_Enum>>;
};

/** input type for inserting data into table "action_type" */
export type Action_Type_Insert_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Action_Type_Max_Fields = {
  __typename?: 'action_type_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Action_Type_Min_Fields = {
  __typename?: 'action_type_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "action_type" */
export type Action_Type_Mutation_Response = {
  __typename?: 'action_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Action_Type>;
};

/** on_conflict condition type for table "action_type" */
export type Action_Type_On_Conflict = {
  constraint: Action_Type_Constraint;
  update_columns?: Array<Action_Type_Update_Column>;
  where?: InputMaybe<Action_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "action_type". */
export type Action_Type_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: action_type */
export type Action_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "action_type" */
export enum Action_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "action_type" */
export type Action_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "action_type" */
export type Action_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Action_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Action_Type_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "action_type" */
export enum Action_Type_Update_Column {
  /** column name */
  Value = 'value'
}

export type Action_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Action_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Action_Type_Bool_Exp;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "elation_patients" */
export type Elation_Patients = {
  __typename?: 'elation_patients';
  actual_name?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['jsonb']['output']>;
  address_line1?: Maybe<Scalars['String']['output']>;
  address_line2?: Maybe<Scalars['String']['output']>;
  caregiver_practice: Scalars['bigint']['output'];
  city?: Maybe<Scalars['String']['output']>;
  consents?: Maybe<Scalars['jsonb']['output']>;
  created_date: Scalars['timestamptz']['output'];
  deleted_date?: Maybe<Scalars['timestamptz']['output']>;
  deleted_insurances?: Maybe<Scalars['jsonb']['output']>;
  dob: Scalars['date']['output'];
  emails?: Maybe<Scalars['jsonb']['output']>;
  emergency_contact?: Maybe<Scalars['jsonb']['output']>;
  employer?: Maybe<Scalars['jsonb']['output']>;
  ethnicity?: Maybe<Scalars['String']['output']>;
  first_name: Scalars['String']['output'];
  gender_identity?: Maybe<Scalars['String']['output']>;
  guarantor?: Maybe<Scalars['jsonb']['output']>;
  id: Scalars['bigint']['output'];
  insurances?: Maybe<Scalars['jsonb']['output']>;
  last_modified?: Maybe<Scalars['timestamptz']['output']>;
  last_name: Scalars['String']['output'];
  legal_gender_marker?: Maybe<Scalars['String']['output']>;
  legal_gender_marker_display?: Maybe<Scalars['String']['output']>;
  master_patient?: Maybe<Scalars['bigint']['output']>;
  merged_into_chart?: Maybe<Scalars['bigint']['output']>;
  metadata?: Maybe<Scalars['jsonb']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
  mothers_maiden_name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  patient_status?: Maybe<Scalars['jsonb']['output']>;
  phones?: Maybe<Scalars['jsonb']['output']>;
  preference?: Maybe<Scalars['jsonb']['output']>;
  preferred_contact?: Maybe<Scalars['String']['output']>;
  preferred_language?: Maybe<Scalars['String']['output']>;
  preferred_service_location?: Maybe<Scalars['bigint']['output']>;
  previous_address?: Maybe<Scalars['jsonb']['output']>;
  previous_first_name?: Maybe<Scalars['String']['output']>;
  previous_last_name?: Maybe<Scalars['String']['output']>;
  previous_name?: Maybe<Scalars['jsonb']['output']>;
  primary_care_provider?: Maybe<Scalars['bigint']['output']>;
  primary_care_provider_npi?: Maybe<Scalars['String']['output']>;
  primary_physician: Scalars['bigint']['output'];
  pronouns?: Maybe<Scalars['String']['output']>;
  pronouns_display?: Maybe<Scalars['String']['output']>;
  race?: Maybe<Scalars['String']['output']>;
  sex: Scalars['String']['output'];
  sexual_orientation?: Maybe<Scalars['String']['output']>;
  sms_opt_in_status?: Maybe<Scalars['Boolean']['output']>;
  ssn?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['jsonb']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  vip?: Maybe<Scalars['Boolean']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "elation_patients" */
export type Elation_PatientsAddressArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "elation_patients" */
export type Elation_PatientsConsentsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "elation_patients" */
export type Elation_PatientsDeleted_InsurancesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "elation_patients" */
export type Elation_PatientsEmailsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "elation_patients" */
export type Elation_PatientsEmergency_ContactArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "elation_patients" */
export type Elation_PatientsEmployerArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "elation_patients" */
export type Elation_PatientsGuarantorArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "elation_patients" */
export type Elation_PatientsInsurancesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "elation_patients" */
export type Elation_PatientsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "elation_patients" */
export type Elation_PatientsPatient_StatusArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "elation_patients" */
export type Elation_PatientsPhonesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "elation_patients" */
export type Elation_PatientsPreferenceArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "elation_patients" */
export type Elation_PatientsPrevious_AddressArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "elation_patients" */
export type Elation_PatientsPrevious_NameArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "elation_patients" */
export type Elation_PatientsTagsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "elation_patients" */
export type Elation_Patients_Aggregate = {
  __typename?: 'elation_patients_aggregate';
  aggregate?: Maybe<Elation_Patients_Aggregate_Fields>;
  nodes: Array<Elation_Patients>;
};

/** aggregate fields of "elation_patients" */
export type Elation_Patients_Aggregate_Fields = {
  __typename?: 'elation_patients_aggregate_fields';
  avg?: Maybe<Elation_Patients_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Elation_Patients_Max_Fields>;
  min?: Maybe<Elation_Patients_Min_Fields>;
  stddev?: Maybe<Elation_Patients_Stddev_Fields>;
  stddev_pop?: Maybe<Elation_Patients_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Elation_Patients_Stddev_Samp_Fields>;
  sum?: Maybe<Elation_Patients_Sum_Fields>;
  var_pop?: Maybe<Elation_Patients_Var_Pop_Fields>;
  var_samp?: Maybe<Elation_Patients_Var_Samp_Fields>;
  variance?: Maybe<Elation_Patients_Variance_Fields>;
};


/** aggregate fields of "elation_patients" */
export type Elation_Patients_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Elation_Patients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Elation_Patients_Append_Input = {
  address?: InputMaybe<Scalars['jsonb']['input']>;
  consents?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_insurances?: InputMaybe<Scalars['jsonb']['input']>;
  emails?: InputMaybe<Scalars['jsonb']['input']>;
  emergency_contact?: InputMaybe<Scalars['jsonb']['input']>;
  employer?: InputMaybe<Scalars['jsonb']['input']>;
  guarantor?: InputMaybe<Scalars['jsonb']['input']>;
  insurances?: InputMaybe<Scalars['jsonb']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  patient_status?: InputMaybe<Scalars['jsonb']['input']>;
  phones?: InputMaybe<Scalars['jsonb']['input']>;
  preference?: InputMaybe<Scalars['jsonb']['input']>;
  previous_address?: InputMaybe<Scalars['jsonb']['input']>;
  previous_name?: InputMaybe<Scalars['jsonb']['input']>;
  tags?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Elation_Patients_Avg_Fields = {
  __typename?: 'elation_patients_avg_fields';
  caregiver_practice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  master_patient?: Maybe<Scalars['Float']['output']>;
  merged_into_chart?: Maybe<Scalars['Float']['output']>;
  preferred_service_location?: Maybe<Scalars['Float']['output']>;
  primary_care_provider?: Maybe<Scalars['Float']['output']>;
  primary_physician?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "elation_patients". All fields are combined with a logical 'AND'. */
export type Elation_Patients_Bool_Exp = {
  _and?: InputMaybe<Array<Elation_Patients_Bool_Exp>>;
  _not?: InputMaybe<Elation_Patients_Bool_Exp>;
  _or?: InputMaybe<Array<Elation_Patients_Bool_Exp>>;
  actual_name?: InputMaybe<String_Comparison_Exp>;
  address?: InputMaybe<Jsonb_Comparison_Exp>;
  address_line1?: InputMaybe<String_Comparison_Exp>;
  address_line2?: InputMaybe<String_Comparison_Exp>;
  caregiver_practice?: InputMaybe<Bigint_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  consents?: InputMaybe<Jsonb_Comparison_Exp>;
  created_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_insurances?: InputMaybe<Jsonb_Comparison_Exp>;
  dob?: InputMaybe<Date_Comparison_Exp>;
  emails?: InputMaybe<Jsonb_Comparison_Exp>;
  emergency_contact?: InputMaybe<Jsonb_Comparison_Exp>;
  employer?: InputMaybe<Jsonb_Comparison_Exp>;
  ethnicity?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  gender_identity?: InputMaybe<String_Comparison_Exp>;
  guarantor?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  insurances?: InputMaybe<Jsonb_Comparison_Exp>;
  last_modified?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  legal_gender_marker?: InputMaybe<String_Comparison_Exp>;
  legal_gender_marker_display?: InputMaybe<String_Comparison_Exp>;
  master_patient?: InputMaybe<Bigint_Comparison_Exp>;
  merged_into_chart?: InputMaybe<Bigint_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  middle_name?: InputMaybe<String_Comparison_Exp>;
  mothers_maiden_name?: InputMaybe<String_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
  patient_status?: InputMaybe<Jsonb_Comparison_Exp>;
  phones?: InputMaybe<Jsonb_Comparison_Exp>;
  preference?: InputMaybe<Jsonb_Comparison_Exp>;
  preferred_contact?: InputMaybe<String_Comparison_Exp>;
  preferred_language?: InputMaybe<String_Comparison_Exp>;
  preferred_service_location?: InputMaybe<Bigint_Comparison_Exp>;
  previous_address?: InputMaybe<Jsonb_Comparison_Exp>;
  previous_first_name?: InputMaybe<String_Comparison_Exp>;
  previous_last_name?: InputMaybe<String_Comparison_Exp>;
  previous_name?: InputMaybe<Jsonb_Comparison_Exp>;
  primary_care_provider?: InputMaybe<Bigint_Comparison_Exp>;
  primary_care_provider_npi?: InputMaybe<String_Comparison_Exp>;
  primary_physician?: InputMaybe<Bigint_Comparison_Exp>;
  pronouns?: InputMaybe<String_Comparison_Exp>;
  pronouns_display?: InputMaybe<String_Comparison_Exp>;
  race?: InputMaybe<String_Comparison_Exp>;
  sex?: InputMaybe<String_Comparison_Exp>;
  sexual_orientation?: InputMaybe<String_Comparison_Exp>;
  sms_opt_in_status?: InputMaybe<Boolean_Comparison_Exp>;
  ssn?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  suffix?: InputMaybe<String_Comparison_Exp>;
  tags?: InputMaybe<Jsonb_Comparison_Exp>;
  timezone?: InputMaybe<String_Comparison_Exp>;
  vip?: InputMaybe<Boolean_Comparison_Exp>;
  zip?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "elation_patients" */
export enum Elation_Patients_Constraint {
  /** unique or primary key constraint on columns "id" */
  ElationPatientsPkey = 'elation_patients_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Elation_Patients_Delete_At_Path_Input = {
  address?: InputMaybe<Array<Scalars['String']['input']>>;
  consents?: InputMaybe<Array<Scalars['String']['input']>>;
  deleted_insurances?: InputMaybe<Array<Scalars['String']['input']>>;
  emails?: InputMaybe<Array<Scalars['String']['input']>>;
  emergency_contact?: InputMaybe<Array<Scalars['String']['input']>>;
  employer?: InputMaybe<Array<Scalars['String']['input']>>;
  guarantor?: InputMaybe<Array<Scalars['String']['input']>>;
  insurances?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
  patient_status?: InputMaybe<Array<Scalars['String']['input']>>;
  phones?: InputMaybe<Array<Scalars['String']['input']>>;
  preference?: InputMaybe<Array<Scalars['String']['input']>>;
  previous_address?: InputMaybe<Array<Scalars['String']['input']>>;
  previous_name?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Elation_Patients_Delete_Elem_Input = {
  address?: InputMaybe<Scalars['Int']['input']>;
  consents?: InputMaybe<Scalars['Int']['input']>;
  deleted_insurances?: InputMaybe<Scalars['Int']['input']>;
  emails?: InputMaybe<Scalars['Int']['input']>;
  emergency_contact?: InputMaybe<Scalars['Int']['input']>;
  employer?: InputMaybe<Scalars['Int']['input']>;
  guarantor?: InputMaybe<Scalars['Int']['input']>;
  insurances?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['Int']['input']>;
  patient_status?: InputMaybe<Scalars['Int']['input']>;
  phones?: InputMaybe<Scalars['Int']['input']>;
  preference?: InputMaybe<Scalars['Int']['input']>;
  previous_address?: InputMaybe<Scalars['Int']['input']>;
  previous_name?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Elation_Patients_Delete_Key_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  consents?: InputMaybe<Scalars['String']['input']>;
  deleted_insurances?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Scalars['String']['input']>;
  emergency_contact?: InputMaybe<Scalars['String']['input']>;
  employer?: InputMaybe<Scalars['String']['input']>;
  guarantor?: InputMaybe<Scalars['String']['input']>;
  insurances?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  patient_status?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Scalars['String']['input']>;
  preference?: InputMaybe<Scalars['String']['input']>;
  previous_address?: InputMaybe<Scalars['String']['input']>;
  previous_name?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "elation_patients" */
export type Elation_Patients_Inc_Input = {
  caregiver_practice?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  master_patient?: InputMaybe<Scalars['bigint']['input']>;
  merged_into_chart?: InputMaybe<Scalars['bigint']['input']>;
  preferred_service_location?: InputMaybe<Scalars['bigint']['input']>;
  primary_care_provider?: InputMaybe<Scalars['bigint']['input']>;
  primary_physician?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "elation_patients" */
export type Elation_Patients_Insert_Input = {
  actual_name?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['jsonb']['input']>;
  address_line1?: InputMaybe<Scalars['String']['input']>;
  address_line2?: InputMaybe<Scalars['String']['input']>;
  caregiver_practice?: InputMaybe<Scalars['bigint']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  consents?: InputMaybe<Scalars['jsonb']['input']>;
  created_date?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_date?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_insurances?: InputMaybe<Scalars['jsonb']['input']>;
  dob?: InputMaybe<Scalars['date']['input']>;
  emails?: InputMaybe<Scalars['jsonb']['input']>;
  emergency_contact?: InputMaybe<Scalars['jsonb']['input']>;
  employer?: InputMaybe<Scalars['jsonb']['input']>;
  ethnicity?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender_identity?: InputMaybe<Scalars['String']['input']>;
  guarantor?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  insurances?: InputMaybe<Scalars['jsonb']['input']>;
  last_modified?: InputMaybe<Scalars['timestamptz']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  legal_gender_marker?: InputMaybe<Scalars['String']['input']>;
  legal_gender_marker_display?: InputMaybe<Scalars['String']['input']>;
  master_patient?: InputMaybe<Scalars['bigint']['input']>;
  merged_into_chart?: InputMaybe<Scalars['bigint']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  mothers_maiden_name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  patient_status?: InputMaybe<Scalars['jsonb']['input']>;
  phones?: InputMaybe<Scalars['jsonb']['input']>;
  preference?: InputMaybe<Scalars['jsonb']['input']>;
  preferred_contact?: InputMaybe<Scalars['String']['input']>;
  preferred_language?: InputMaybe<Scalars['String']['input']>;
  preferred_service_location?: InputMaybe<Scalars['bigint']['input']>;
  previous_address?: InputMaybe<Scalars['jsonb']['input']>;
  previous_first_name?: InputMaybe<Scalars['String']['input']>;
  previous_last_name?: InputMaybe<Scalars['String']['input']>;
  previous_name?: InputMaybe<Scalars['jsonb']['input']>;
  primary_care_provider?: InputMaybe<Scalars['bigint']['input']>;
  primary_care_provider_npi?: InputMaybe<Scalars['String']['input']>;
  primary_physician?: InputMaybe<Scalars['bigint']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  pronouns_display?: InputMaybe<Scalars['String']['input']>;
  race?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['String']['input']>;
  sexual_orientation?: InputMaybe<Scalars['String']['input']>;
  sms_opt_in_status?: InputMaybe<Scalars['Boolean']['input']>;
  ssn?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['jsonb']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  vip?: InputMaybe<Scalars['Boolean']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Elation_Patients_Max_Fields = {
  __typename?: 'elation_patients_max_fields';
  actual_name?: Maybe<Scalars['String']['output']>;
  address_line1?: Maybe<Scalars['String']['output']>;
  address_line2?: Maybe<Scalars['String']['output']>;
  caregiver_practice?: Maybe<Scalars['bigint']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  deleted_date?: Maybe<Scalars['timestamptz']['output']>;
  dob?: Maybe<Scalars['date']['output']>;
  ethnicity?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender_identity?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  last_modified?: Maybe<Scalars['timestamptz']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  legal_gender_marker?: Maybe<Scalars['String']['output']>;
  legal_gender_marker_display?: Maybe<Scalars['String']['output']>;
  master_patient?: Maybe<Scalars['bigint']['output']>;
  merged_into_chart?: Maybe<Scalars['bigint']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
  mothers_maiden_name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  preferred_contact?: Maybe<Scalars['String']['output']>;
  preferred_language?: Maybe<Scalars['String']['output']>;
  preferred_service_location?: Maybe<Scalars['bigint']['output']>;
  previous_first_name?: Maybe<Scalars['String']['output']>;
  previous_last_name?: Maybe<Scalars['String']['output']>;
  primary_care_provider?: Maybe<Scalars['bigint']['output']>;
  primary_care_provider_npi?: Maybe<Scalars['String']['output']>;
  primary_physician?: Maybe<Scalars['bigint']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  pronouns_display?: Maybe<Scalars['String']['output']>;
  race?: Maybe<Scalars['String']['output']>;
  sex?: Maybe<Scalars['String']['output']>;
  sexual_orientation?: Maybe<Scalars['String']['output']>;
  ssn?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Elation_Patients_Min_Fields = {
  __typename?: 'elation_patients_min_fields';
  actual_name?: Maybe<Scalars['String']['output']>;
  address_line1?: Maybe<Scalars['String']['output']>;
  address_line2?: Maybe<Scalars['String']['output']>;
  caregiver_practice?: Maybe<Scalars['bigint']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  deleted_date?: Maybe<Scalars['timestamptz']['output']>;
  dob?: Maybe<Scalars['date']['output']>;
  ethnicity?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender_identity?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  last_modified?: Maybe<Scalars['timestamptz']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  legal_gender_marker?: Maybe<Scalars['String']['output']>;
  legal_gender_marker_display?: Maybe<Scalars['String']['output']>;
  master_patient?: Maybe<Scalars['bigint']['output']>;
  merged_into_chart?: Maybe<Scalars['bigint']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
  mothers_maiden_name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  preferred_contact?: Maybe<Scalars['String']['output']>;
  preferred_language?: Maybe<Scalars['String']['output']>;
  preferred_service_location?: Maybe<Scalars['bigint']['output']>;
  previous_first_name?: Maybe<Scalars['String']['output']>;
  previous_last_name?: Maybe<Scalars['String']['output']>;
  primary_care_provider?: Maybe<Scalars['bigint']['output']>;
  primary_care_provider_npi?: Maybe<Scalars['String']['output']>;
  primary_physician?: Maybe<Scalars['bigint']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  pronouns_display?: Maybe<Scalars['String']['output']>;
  race?: Maybe<Scalars['String']['output']>;
  sex?: Maybe<Scalars['String']['output']>;
  sexual_orientation?: Maybe<Scalars['String']['output']>;
  ssn?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "elation_patients" */
export type Elation_Patients_Mutation_Response = {
  __typename?: 'elation_patients_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Elation_Patients>;
};

/** on_conflict condition type for table "elation_patients" */
export type Elation_Patients_On_Conflict = {
  constraint: Elation_Patients_Constraint;
  update_columns?: Array<Elation_Patients_Update_Column>;
  where?: InputMaybe<Elation_Patients_Bool_Exp>;
};

/** Ordering options when selecting data from "elation_patients". */
export type Elation_Patients_Order_By = {
  actual_name?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  address_line1?: InputMaybe<Order_By>;
  address_line2?: InputMaybe<Order_By>;
  caregiver_practice?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  consents?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  deleted_date?: InputMaybe<Order_By>;
  deleted_insurances?: InputMaybe<Order_By>;
  dob?: InputMaybe<Order_By>;
  emails?: InputMaybe<Order_By>;
  emergency_contact?: InputMaybe<Order_By>;
  employer?: InputMaybe<Order_By>;
  ethnicity?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  gender_identity?: InputMaybe<Order_By>;
  guarantor?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  insurances?: InputMaybe<Order_By>;
  last_modified?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  legal_gender_marker?: InputMaybe<Order_By>;
  legal_gender_marker_display?: InputMaybe<Order_By>;
  master_patient?: InputMaybe<Order_By>;
  merged_into_chart?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  middle_name?: InputMaybe<Order_By>;
  mothers_maiden_name?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  patient_status?: InputMaybe<Order_By>;
  phones?: InputMaybe<Order_By>;
  preference?: InputMaybe<Order_By>;
  preferred_contact?: InputMaybe<Order_By>;
  preferred_language?: InputMaybe<Order_By>;
  preferred_service_location?: InputMaybe<Order_By>;
  previous_address?: InputMaybe<Order_By>;
  previous_first_name?: InputMaybe<Order_By>;
  previous_last_name?: InputMaybe<Order_By>;
  previous_name?: InputMaybe<Order_By>;
  primary_care_provider?: InputMaybe<Order_By>;
  primary_care_provider_npi?: InputMaybe<Order_By>;
  primary_physician?: InputMaybe<Order_By>;
  pronouns?: InputMaybe<Order_By>;
  pronouns_display?: InputMaybe<Order_By>;
  race?: InputMaybe<Order_By>;
  sex?: InputMaybe<Order_By>;
  sexual_orientation?: InputMaybe<Order_By>;
  sms_opt_in_status?: InputMaybe<Order_By>;
  ssn?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  suffix?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  vip?: InputMaybe<Order_By>;
  zip?: InputMaybe<Order_By>;
};

/** primary key columns input for table: elation_patients */
export type Elation_Patients_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Elation_Patients_Prepend_Input = {
  address?: InputMaybe<Scalars['jsonb']['input']>;
  consents?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_insurances?: InputMaybe<Scalars['jsonb']['input']>;
  emails?: InputMaybe<Scalars['jsonb']['input']>;
  emergency_contact?: InputMaybe<Scalars['jsonb']['input']>;
  employer?: InputMaybe<Scalars['jsonb']['input']>;
  guarantor?: InputMaybe<Scalars['jsonb']['input']>;
  insurances?: InputMaybe<Scalars['jsonb']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  patient_status?: InputMaybe<Scalars['jsonb']['input']>;
  phones?: InputMaybe<Scalars['jsonb']['input']>;
  preference?: InputMaybe<Scalars['jsonb']['input']>;
  previous_address?: InputMaybe<Scalars['jsonb']['input']>;
  previous_name?: InputMaybe<Scalars['jsonb']['input']>;
  tags?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "elation_patients" */
export enum Elation_Patients_Select_Column {
  /** column name */
  ActualName = 'actual_name',
  /** column name */
  Address = 'address',
  /** column name */
  AddressLine1 = 'address_line1',
  /** column name */
  AddressLine2 = 'address_line2',
  /** column name */
  CaregiverPractice = 'caregiver_practice',
  /** column name */
  City = 'city',
  /** column name */
  Consents = 'consents',
  /** column name */
  CreatedDate = 'created_date',
  /** column name */
  DeletedDate = 'deleted_date',
  /** column name */
  DeletedInsurances = 'deleted_insurances',
  /** column name */
  Dob = 'dob',
  /** column name */
  Emails = 'emails',
  /** column name */
  EmergencyContact = 'emergency_contact',
  /** column name */
  Employer = 'employer',
  /** column name */
  Ethnicity = 'ethnicity',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  GenderIdentity = 'gender_identity',
  /** column name */
  Guarantor = 'guarantor',
  /** column name */
  Id = 'id',
  /** column name */
  Insurances = 'insurances',
  /** column name */
  LastModified = 'last_modified',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LegalGenderMarker = 'legal_gender_marker',
  /** column name */
  LegalGenderMarkerDisplay = 'legal_gender_marker_display',
  /** column name */
  MasterPatient = 'master_patient',
  /** column name */
  MergedIntoChart = 'merged_into_chart',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MiddleName = 'middle_name',
  /** column name */
  MothersMaidenName = 'mothers_maiden_name',
  /** column name */
  Notes = 'notes',
  /** column name */
  PatientStatus = 'patient_status',
  /** column name */
  Phones = 'phones',
  /** column name */
  Preference = 'preference',
  /** column name */
  PreferredContact = 'preferred_contact',
  /** column name */
  PreferredLanguage = 'preferred_language',
  /** column name */
  PreferredServiceLocation = 'preferred_service_location',
  /** column name */
  PreviousAddress = 'previous_address',
  /** column name */
  PreviousFirstName = 'previous_first_name',
  /** column name */
  PreviousLastName = 'previous_last_name',
  /** column name */
  PreviousName = 'previous_name',
  /** column name */
  PrimaryCareProvider = 'primary_care_provider',
  /** column name */
  PrimaryCareProviderNpi = 'primary_care_provider_npi',
  /** column name */
  PrimaryPhysician = 'primary_physician',
  /** column name */
  Pronouns = 'pronouns',
  /** column name */
  PronounsDisplay = 'pronouns_display',
  /** column name */
  Race = 'race',
  /** column name */
  Sex = 'sex',
  /** column name */
  SexualOrientation = 'sexual_orientation',
  /** column name */
  SmsOptInStatus = 'sms_opt_in_status',
  /** column name */
  Ssn = 'ssn',
  /** column name */
  State = 'state',
  /** column name */
  Suffix = 'suffix',
  /** column name */
  Tags = 'tags',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  Vip = 'vip',
  /** column name */
  Zip = 'zip'
}

/** input type for updating data in table "elation_patients" */
export type Elation_Patients_Set_Input = {
  actual_name?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['jsonb']['input']>;
  address_line1?: InputMaybe<Scalars['String']['input']>;
  address_line2?: InputMaybe<Scalars['String']['input']>;
  caregiver_practice?: InputMaybe<Scalars['bigint']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  consents?: InputMaybe<Scalars['jsonb']['input']>;
  created_date?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_date?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_insurances?: InputMaybe<Scalars['jsonb']['input']>;
  dob?: InputMaybe<Scalars['date']['input']>;
  emails?: InputMaybe<Scalars['jsonb']['input']>;
  emergency_contact?: InputMaybe<Scalars['jsonb']['input']>;
  employer?: InputMaybe<Scalars['jsonb']['input']>;
  ethnicity?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender_identity?: InputMaybe<Scalars['String']['input']>;
  guarantor?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  insurances?: InputMaybe<Scalars['jsonb']['input']>;
  last_modified?: InputMaybe<Scalars['timestamptz']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  legal_gender_marker?: InputMaybe<Scalars['String']['input']>;
  legal_gender_marker_display?: InputMaybe<Scalars['String']['input']>;
  master_patient?: InputMaybe<Scalars['bigint']['input']>;
  merged_into_chart?: InputMaybe<Scalars['bigint']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  mothers_maiden_name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  patient_status?: InputMaybe<Scalars['jsonb']['input']>;
  phones?: InputMaybe<Scalars['jsonb']['input']>;
  preference?: InputMaybe<Scalars['jsonb']['input']>;
  preferred_contact?: InputMaybe<Scalars['String']['input']>;
  preferred_language?: InputMaybe<Scalars['String']['input']>;
  preferred_service_location?: InputMaybe<Scalars['bigint']['input']>;
  previous_address?: InputMaybe<Scalars['jsonb']['input']>;
  previous_first_name?: InputMaybe<Scalars['String']['input']>;
  previous_last_name?: InputMaybe<Scalars['String']['input']>;
  previous_name?: InputMaybe<Scalars['jsonb']['input']>;
  primary_care_provider?: InputMaybe<Scalars['bigint']['input']>;
  primary_care_provider_npi?: InputMaybe<Scalars['String']['input']>;
  primary_physician?: InputMaybe<Scalars['bigint']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  pronouns_display?: InputMaybe<Scalars['String']['input']>;
  race?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['String']['input']>;
  sexual_orientation?: InputMaybe<Scalars['String']['input']>;
  sms_opt_in_status?: InputMaybe<Scalars['Boolean']['input']>;
  ssn?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['jsonb']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  vip?: InputMaybe<Scalars['Boolean']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Elation_Patients_Stddev_Fields = {
  __typename?: 'elation_patients_stddev_fields';
  caregiver_practice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  master_patient?: Maybe<Scalars['Float']['output']>;
  merged_into_chart?: Maybe<Scalars['Float']['output']>;
  preferred_service_location?: Maybe<Scalars['Float']['output']>;
  primary_care_provider?: Maybe<Scalars['Float']['output']>;
  primary_physician?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Elation_Patients_Stddev_Pop_Fields = {
  __typename?: 'elation_patients_stddev_pop_fields';
  caregiver_practice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  master_patient?: Maybe<Scalars['Float']['output']>;
  merged_into_chart?: Maybe<Scalars['Float']['output']>;
  preferred_service_location?: Maybe<Scalars['Float']['output']>;
  primary_care_provider?: Maybe<Scalars['Float']['output']>;
  primary_physician?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Elation_Patients_Stddev_Samp_Fields = {
  __typename?: 'elation_patients_stddev_samp_fields';
  caregiver_practice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  master_patient?: Maybe<Scalars['Float']['output']>;
  merged_into_chart?: Maybe<Scalars['Float']['output']>;
  preferred_service_location?: Maybe<Scalars['Float']['output']>;
  primary_care_provider?: Maybe<Scalars['Float']['output']>;
  primary_physician?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "elation_patients" */
export type Elation_Patients_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Elation_Patients_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Elation_Patients_Stream_Cursor_Value_Input = {
  actual_name?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['jsonb']['input']>;
  address_line1?: InputMaybe<Scalars['String']['input']>;
  address_line2?: InputMaybe<Scalars['String']['input']>;
  caregiver_practice?: InputMaybe<Scalars['bigint']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  consents?: InputMaybe<Scalars['jsonb']['input']>;
  created_date?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_date?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_insurances?: InputMaybe<Scalars['jsonb']['input']>;
  dob?: InputMaybe<Scalars['date']['input']>;
  emails?: InputMaybe<Scalars['jsonb']['input']>;
  emergency_contact?: InputMaybe<Scalars['jsonb']['input']>;
  employer?: InputMaybe<Scalars['jsonb']['input']>;
  ethnicity?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender_identity?: InputMaybe<Scalars['String']['input']>;
  guarantor?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  insurances?: InputMaybe<Scalars['jsonb']['input']>;
  last_modified?: InputMaybe<Scalars['timestamptz']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  legal_gender_marker?: InputMaybe<Scalars['String']['input']>;
  legal_gender_marker_display?: InputMaybe<Scalars['String']['input']>;
  master_patient?: InputMaybe<Scalars['bigint']['input']>;
  merged_into_chart?: InputMaybe<Scalars['bigint']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  mothers_maiden_name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  patient_status?: InputMaybe<Scalars['jsonb']['input']>;
  phones?: InputMaybe<Scalars['jsonb']['input']>;
  preference?: InputMaybe<Scalars['jsonb']['input']>;
  preferred_contact?: InputMaybe<Scalars['String']['input']>;
  preferred_language?: InputMaybe<Scalars['String']['input']>;
  preferred_service_location?: InputMaybe<Scalars['bigint']['input']>;
  previous_address?: InputMaybe<Scalars['jsonb']['input']>;
  previous_first_name?: InputMaybe<Scalars['String']['input']>;
  previous_last_name?: InputMaybe<Scalars['String']['input']>;
  previous_name?: InputMaybe<Scalars['jsonb']['input']>;
  primary_care_provider?: InputMaybe<Scalars['bigint']['input']>;
  primary_care_provider_npi?: InputMaybe<Scalars['String']['input']>;
  primary_physician?: InputMaybe<Scalars['bigint']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  pronouns_display?: InputMaybe<Scalars['String']['input']>;
  race?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['String']['input']>;
  sexual_orientation?: InputMaybe<Scalars['String']['input']>;
  sms_opt_in_status?: InputMaybe<Scalars['Boolean']['input']>;
  ssn?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['jsonb']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  vip?: InputMaybe<Scalars['Boolean']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Elation_Patients_Sum_Fields = {
  __typename?: 'elation_patients_sum_fields';
  caregiver_practice?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  master_patient?: Maybe<Scalars['bigint']['output']>;
  merged_into_chart?: Maybe<Scalars['bigint']['output']>;
  preferred_service_location?: Maybe<Scalars['bigint']['output']>;
  primary_care_provider?: Maybe<Scalars['bigint']['output']>;
  primary_physician?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "elation_patients" */
export enum Elation_Patients_Update_Column {
  /** column name */
  ActualName = 'actual_name',
  /** column name */
  Address = 'address',
  /** column name */
  AddressLine1 = 'address_line1',
  /** column name */
  AddressLine2 = 'address_line2',
  /** column name */
  CaregiverPractice = 'caregiver_practice',
  /** column name */
  City = 'city',
  /** column name */
  Consents = 'consents',
  /** column name */
  CreatedDate = 'created_date',
  /** column name */
  DeletedDate = 'deleted_date',
  /** column name */
  DeletedInsurances = 'deleted_insurances',
  /** column name */
  Dob = 'dob',
  /** column name */
  Emails = 'emails',
  /** column name */
  EmergencyContact = 'emergency_contact',
  /** column name */
  Employer = 'employer',
  /** column name */
  Ethnicity = 'ethnicity',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  GenderIdentity = 'gender_identity',
  /** column name */
  Guarantor = 'guarantor',
  /** column name */
  Id = 'id',
  /** column name */
  Insurances = 'insurances',
  /** column name */
  LastModified = 'last_modified',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LegalGenderMarker = 'legal_gender_marker',
  /** column name */
  LegalGenderMarkerDisplay = 'legal_gender_marker_display',
  /** column name */
  MasterPatient = 'master_patient',
  /** column name */
  MergedIntoChart = 'merged_into_chart',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MiddleName = 'middle_name',
  /** column name */
  MothersMaidenName = 'mothers_maiden_name',
  /** column name */
  Notes = 'notes',
  /** column name */
  PatientStatus = 'patient_status',
  /** column name */
  Phones = 'phones',
  /** column name */
  Preference = 'preference',
  /** column name */
  PreferredContact = 'preferred_contact',
  /** column name */
  PreferredLanguage = 'preferred_language',
  /** column name */
  PreferredServiceLocation = 'preferred_service_location',
  /** column name */
  PreviousAddress = 'previous_address',
  /** column name */
  PreviousFirstName = 'previous_first_name',
  /** column name */
  PreviousLastName = 'previous_last_name',
  /** column name */
  PreviousName = 'previous_name',
  /** column name */
  PrimaryCareProvider = 'primary_care_provider',
  /** column name */
  PrimaryCareProviderNpi = 'primary_care_provider_npi',
  /** column name */
  PrimaryPhysician = 'primary_physician',
  /** column name */
  Pronouns = 'pronouns',
  /** column name */
  PronounsDisplay = 'pronouns_display',
  /** column name */
  Race = 'race',
  /** column name */
  Sex = 'sex',
  /** column name */
  SexualOrientation = 'sexual_orientation',
  /** column name */
  SmsOptInStatus = 'sms_opt_in_status',
  /** column name */
  Ssn = 'ssn',
  /** column name */
  State = 'state',
  /** column name */
  Suffix = 'suffix',
  /** column name */
  Tags = 'tags',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  Vip = 'vip',
  /** column name */
  Zip = 'zip'
}

export type Elation_Patients_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Elation_Patients_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Elation_Patients_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Elation_Patients_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Elation_Patients_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Elation_Patients_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Elation_Patients_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Elation_Patients_Set_Input>;
  /** filter the rows which have to be updated */
  where: Elation_Patients_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Elation_Patients_Var_Pop_Fields = {
  __typename?: 'elation_patients_var_pop_fields';
  caregiver_practice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  master_patient?: Maybe<Scalars['Float']['output']>;
  merged_into_chart?: Maybe<Scalars['Float']['output']>;
  preferred_service_location?: Maybe<Scalars['Float']['output']>;
  primary_care_provider?: Maybe<Scalars['Float']['output']>;
  primary_physician?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Elation_Patients_Var_Samp_Fields = {
  __typename?: 'elation_patients_var_samp_fields';
  caregiver_practice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  master_patient?: Maybe<Scalars['Float']['output']>;
  merged_into_chart?: Maybe<Scalars['Float']['output']>;
  preferred_service_location?: Maybe<Scalars['Float']['output']>;
  primary_care_provider?: Maybe<Scalars['Float']['output']>;
  primary_physician?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Elation_Patients_Variance_Fields = {
  __typename?: 'elation_patients_variance_fields';
  caregiver_practice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  master_patient?: Maybe<Scalars['Float']['output']>;
  merged_into_chart?: Maybe<Scalars['Float']['output']>;
  preferred_service_location?: Maybe<Scalars['Float']['output']>;
  primary_care_provider?: Maybe<Scalars['Float']['output']>;
  primary_physician?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "hint_patients" */
export type Hint_Patients = {
  __typename?: 'hint_patients';
  account?: Maybe<Scalars['jsonb']['output']>;
  address_city?: Maybe<Scalars['String']['output']>;
  address_country?: Maybe<Scalars['String']['output']>;
  address_line1?: Maybe<Scalars['String']['output']>;
  address_line2?: Maybe<Scalars['String']['output']>;
  address_state?: Maybe<Scalars['String']['output']>;
  address_zip?: Maybe<Scalars['String']['output']>;
  age?: Maybe<Scalars['Int']['output']>;
  chosen_first_name?: Maybe<Scalars['String']['output']>;
  chosen_last_name?: Maybe<Scalars['String']['output']>;
  chosen_middle_name?: Maybe<Scalars['String']['output']>;
  chosen_suffix?: Maybe<Scalars['String']['output']>;
  chosen_title?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['jsonb']['output']>;
  created_at: Scalars['timestamptz']['output'];
  dob?: Maybe<Scalars['date']['output']>;
  electronic_communication_consent_accepted?: Maybe<Scalars['Boolean']['output']>;
  electronic_communication_consent_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  external_link_id?: Maybe<Scalars['String']['output']>;
  external_records?: Maybe<Scalars['jsonb']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  gender_identity?: Maybe<Scalars['String']['output']>;
  gender_other?: Maybe<Scalars['String']['output']>;
  health_insurance_group_id?: Maybe<Scalars['String']['output']>;
  health_insurance_member_id?: Maybe<Scalars['String']['output']>;
  health_insurance_payer_id?: Maybe<Scalars['String']['output']>;
  health_insurance_payer_name?: Maybe<Scalars['String']['output']>;
  hipaa_authorization_accepted?: Maybe<Scalars['Boolean']['output']>;
  hipaa_authorization_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['String']['output'];
  import_id?: Maybe<Scalars['String']['output']>;
  import_source?: Maybe<Scalars['String']['output']>;
  integration_error_message?: Maybe<Scalars['String']['output']>;
  integration_last_synced_at?: Maybe<Scalars['timestamptz']['output']>;
  integration_record_id?: Maybe<Scalars['String']['output']>;
  integration_sync_status?: Maybe<Scalars['String']['output']>;
  integration_web_link?: Maybe<Scalars['String']['output']>;
  joined_practice_date?: Maybe<Scalars['date']['output']>;
  known_practice?: Maybe<Scalars['jsonb']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  lead_source?: Maybe<Scalars['jsonb']['output']>;
  lead_source_other?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['jsonb']['output']>;
  location_group?: Maybe<Scalars['jsonb']['output']>;
  membership_status?: Maybe<Scalars['String']['output']>;
  memberships?: Maybe<Scalars['jsonb']['output']>;
  merged_into?: Maybe<Scalars['jsonb']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  patient_agreement_accepted?: Maybe<Scalars['Boolean']['output']>;
  patient_agreement_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
  phones?: Maybe<Scalars['jsonb']['output']>;
  practitioner?: Maybe<Scalars['jsonb']['output']>;
  practitioner_group?: Maybe<Scalars['jsonb']['output']>;
  preferred_language?: Maybe<Scalars['String']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  provider_web_link?: Maybe<Scalars['String']['output']>;
  sex?: Maybe<Scalars['String']['output']>;
  sponsorships?: Maybe<Scalars['jsonb']['output']>;
  ssn?: Maybe<Scalars['jsonb']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  terms_accepted?: Maybe<Scalars['Boolean']['output']>;
  terms_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  uses_tobacco?: Maybe<Scalars['Boolean']['output']>;
};


/** columns and relationships of "hint_patients" */
export type Hint_PatientsAccountArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "hint_patients" */
export type Hint_PatientsCompanyArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "hint_patients" */
export type Hint_PatientsExternal_RecordsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "hint_patients" */
export type Hint_PatientsKnown_PracticeArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "hint_patients" */
export type Hint_PatientsLead_SourceArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "hint_patients" */
export type Hint_PatientsLocationArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "hint_patients" */
export type Hint_PatientsLocation_GroupArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "hint_patients" */
export type Hint_PatientsMembershipsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "hint_patients" */
export type Hint_PatientsMerged_IntoArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "hint_patients" */
export type Hint_PatientsPhonesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "hint_patients" */
export type Hint_PatientsPractitionerArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "hint_patients" */
export type Hint_PatientsPractitioner_GroupArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "hint_patients" */
export type Hint_PatientsSponsorshipsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "hint_patients" */
export type Hint_PatientsSsnArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "hint_patients" */
export type Hint_Patients_Aggregate = {
  __typename?: 'hint_patients_aggregate';
  aggregate?: Maybe<Hint_Patients_Aggregate_Fields>;
  nodes: Array<Hint_Patients>;
};

/** aggregate fields of "hint_patients" */
export type Hint_Patients_Aggregate_Fields = {
  __typename?: 'hint_patients_aggregate_fields';
  avg?: Maybe<Hint_Patients_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Hint_Patients_Max_Fields>;
  min?: Maybe<Hint_Patients_Min_Fields>;
  stddev?: Maybe<Hint_Patients_Stddev_Fields>;
  stddev_pop?: Maybe<Hint_Patients_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Hint_Patients_Stddev_Samp_Fields>;
  sum?: Maybe<Hint_Patients_Sum_Fields>;
  var_pop?: Maybe<Hint_Patients_Var_Pop_Fields>;
  var_samp?: Maybe<Hint_Patients_Var_Samp_Fields>;
  variance?: Maybe<Hint_Patients_Variance_Fields>;
};


/** aggregate fields of "hint_patients" */
export type Hint_Patients_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hint_Patients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Hint_Patients_Append_Input = {
  account?: InputMaybe<Scalars['jsonb']['input']>;
  company?: InputMaybe<Scalars['jsonb']['input']>;
  external_records?: InputMaybe<Scalars['jsonb']['input']>;
  known_practice?: InputMaybe<Scalars['jsonb']['input']>;
  lead_source?: InputMaybe<Scalars['jsonb']['input']>;
  location?: InputMaybe<Scalars['jsonb']['input']>;
  location_group?: InputMaybe<Scalars['jsonb']['input']>;
  memberships?: InputMaybe<Scalars['jsonb']['input']>;
  merged_into?: InputMaybe<Scalars['jsonb']['input']>;
  phones?: InputMaybe<Scalars['jsonb']['input']>;
  practitioner?: InputMaybe<Scalars['jsonb']['input']>;
  practitioner_group?: InputMaybe<Scalars['jsonb']['input']>;
  sponsorships?: InputMaybe<Scalars['jsonb']['input']>;
  ssn?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Hint_Patients_Avg_Fields = {
  __typename?: 'hint_patients_avg_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "hint_patients". All fields are combined with a logical 'AND'. */
export type Hint_Patients_Bool_Exp = {
  _and?: InputMaybe<Array<Hint_Patients_Bool_Exp>>;
  _not?: InputMaybe<Hint_Patients_Bool_Exp>;
  _or?: InputMaybe<Array<Hint_Patients_Bool_Exp>>;
  account?: InputMaybe<Jsonb_Comparison_Exp>;
  address_city?: InputMaybe<String_Comparison_Exp>;
  address_country?: InputMaybe<String_Comparison_Exp>;
  address_line1?: InputMaybe<String_Comparison_Exp>;
  address_line2?: InputMaybe<String_Comparison_Exp>;
  address_state?: InputMaybe<String_Comparison_Exp>;
  address_zip?: InputMaybe<String_Comparison_Exp>;
  age?: InputMaybe<Int_Comparison_Exp>;
  chosen_first_name?: InputMaybe<String_Comparison_Exp>;
  chosen_last_name?: InputMaybe<String_Comparison_Exp>;
  chosen_middle_name?: InputMaybe<String_Comparison_Exp>;
  chosen_suffix?: InputMaybe<String_Comparison_Exp>;
  chosen_title?: InputMaybe<String_Comparison_Exp>;
  company?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dob?: InputMaybe<Date_Comparison_Exp>;
  electronic_communication_consent_accepted?: InputMaybe<Boolean_Comparison_Exp>;
  electronic_communication_consent_accepted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  external_link_id?: InputMaybe<String_Comparison_Exp>;
  external_records?: InputMaybe<Jsonb_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  gender_identity?: InputMaybe<String_Comparison_Exp>;
  gender_other?: InputMaybe<String_Comparison_Exp>;
  health_insurance_group_id?: InputMaybe<String_Comparison_Exp>;
  health_insurance_member_id?: InputMaybe<String_Comparison_Exp>;
  health_insurance_payer_id?: InputMaybe<String_Comparison_Exp>;
  health_insurance_payer_name?: InputMaybe<String_Comparison_Exp>;
  hipaa_authorization_accepted?: InputMaybe<Boolean_Comparison_Exp>;
  hipaa_authorization_accepted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  import_id?: InputMaybe<String_Comparison_Exp>;
  import_source?: InputMaybe<String_Comparison_Exp>;
  integration_error_message?: InputMaybe<String_Comparison_Exp>;
  integration_last_synced_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  integration_record_id?: InputMaybe<String_Comparison_Exp>;
  integration_sync_status?: InputMaybe<String_Comparison_Exp>;
  integration_web_link?: InputMaybe<String_Comparison_Exp>;
  joined_practice_date?: InputMaybe<Date_Comparison_Exp>;
  known_practice?: InputMaybe<Jsonb_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  lead_source?: InputMaybe<Jsonb_Comparison_Exp>;
  lead_source_other?: InputMaybe<String_Comparison_Exp>;
  location?: InputMaybe<Jsonb_Comparison_Exp>;
  location_group?: InputMaybe<Jsonb_Comparison_Exp>;
  membership_status?: InputMaybe<String_Comparison_Exp>;
  memberships?: InputMaybe<Jsonb_Comparison_Exp>;
  merged_into?: InputMaybe<Jsonb_Comparison_Exp>;
  middle_name?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  patient_agreement_accepted?: InputMaybe<Boolean_Comparison_Exp>;
  patient_agreement_accepted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  phones?: InputMaybe<Jsonb_Comparison_Exp>;
  practitioner?: InputMaybe<Jsonb_Comparison_Exp>;
  practitioner_group?: InputMaybe<Jsonb_Comparison_Exp>;
  preferred_language?: InputMaybe<String_Comparison_Exp>;
  pronouns?: InputMaybe<String_Comparison_Exp>;
  provider_web_link?: InputMaybe<String_Comparison_Exp>;
  sex?: InputMaybe<String_Comparison_Exp>;
  sponsorships?: InputMaybe<Jsonb_Comparison_Exp>;
  ssn?: InputMaybe<Jsonb_Comparison_Exp>;
  suffix?: InputMaybe<String_Comparison_Exp>;
  terms_accepted?: InputMaybe<Boolean_Comparison_Exp>;
  terms_accepted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  uses_tobacco?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "hint_patients" */
export enum Hint_Patients_Constraint {
  /** unique or primary key constraint on columns "id" */
  HintPatientsPkey = 'hint_patients_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Hint_Patients_Delete_At_Path_Input = {
  account?: InputMaybe<Array<Scalars['String']['input']>>;
  company?: InputMaybe<Array<Scalars['String']['input']>>;
  external_records?: InputMaybe<Array<Scalars['String']['input']>>;
  known_practice?: InputMaybe<Array<Scalars['String']['input']>>;
  lead_source?: InputMaybe<Array<Scalars['String']['input']>>;
  location?: InputMaybe<Array<Scalars['String']['input']>>;
  location_group?: InputMaybe<Array<Scalars['String']['input']>>;
  memberships?: InputMaybe<Array<Scalars['String']['input']>>;
  merged_into?: InputMaybe<Array<Scalars['String']['input']>>;
  phones?: InputMaybe<Array<Scalars['String']['input']>>;
  practitioner?: InputMaybe<Array<Scalars['String']['input']>>;
  practitioner_group?: InputMaybe<Array<Scalars['String']['input']>>;
  sponsorships?: InputMaybe<Array<Scalars['String']['input']>>;
  ssn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Hint_Patients_Delete_Elem_Input = {
  account?: InputMaybe<Scalars['Int']['input']>;
  company?: InputMaybe<Scalars['Int']['input']>;
  external_records?: InputMaybe<Scalars['Int']['input']>;
  known_practice?: InputMaybe<Scalars['Int']['input']>;
  lead_source?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['Int']['input']>;
  location_group?: InputMaybe<Scalars['Int']['input']>;
  memberships?: InputMaybe<Scalars['Int']['input']>;
  merged_into?: InputMaybe<Scalars['Int']['input']>;
  phones?: InputMaybe<Scalars['Int']['input']>;
  practitioner?: InputMaybe<Scalars['Int']['input']>;
  practitioner_group?: InputMaybe<Scalars['Int']['input']>;
  sponsorships?: InputMaybe<Scalars['Int']['input']>;
  ssn?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Hint_Patients_Delete_Key_Input = {
  account?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  external_records?: InputMaybe<Scalars['String']['input']>;
  known_practice?: InputMaybe<Scalars['String']['input']>;
  lead_source?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  location_group?: InputMaybe<Scalars['String']['input']>;
  memberships?: InputMaybe<Scalars['String']['input']>;
  merged_into?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Scalars['String']['input']>;
  practitioner?: InputMaybe<Scalars['String']['input']>;
  practitioner_group?: InputMaybe<Scalars['String']['input']>;
  sponsorships?: InputMaybe<Scalars['String']['input']>;
  ssn?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "hint_patients" */
export type Hint_Patients_Inc_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "hint_patients" */
export type Hint_Patients_Insert_Input = {
  account?: InputMaybe<Scalars['jsonb']['input']>;
  address_city?: InputMaybe<Scalars['String']['input']>;
  address_country?: InputMaybe<Scalars['String']['input']>;
  address_line1?: InputMaybe<Scalars['String']['input']>;
  address_line2?: InputMaybe<Scalars['String']['input']>;
  address_state?: InputMaybe<Scalars['String']['input']>;
  address_zip?: InputMaybe<Scalars['String']['input']>;
  age?: InputMaybe<Scalars['Int']['input']>;
  chosen_first_name?: InputMaybe<Scalars['String']['input']>;
  chosen_last_name?: InputMaybe<Scalars['String']['input']>;
  chosen_middle_name?: InputMaybe<Scalars['String']['input']>;
  chosen_suffix?: InputMaybe<Scalars['String']['input']>;
  chosen_title?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dob?: InputMaybe<Scalars['date']['input']>;
  electronic_communication_consent_accepted?: InputMaybe<Scalars['Boolean']['input']>;
  electronic_communication_consent_accepted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  external_link_id?: InputMaybe<Scalars['String']['input']>;
  external_records?: InputMaybe<Scalars['jsonb']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  gender_identity?: InputMaybe<Scalars['String']['input']>;
  gender_other?: InputMaybe<Scalars['String']['input']>;
  health_insurance_group_id?: InputMaybe<Scalars['String']['input']>;
  health_insurance_member_id?: InputMaybe<Scalars['String']['input']>;
  health_insurance_payer_id?: InputMaybe<Scalars['String']['input']>;
  health_insurance_payer_name?: InputMaybe<Scalars['String']['input']>;
  hipaa_authorization_accepted?: InputMaybe<Scalars['Boolean']['input']>;
  hipaa_authorization_accepted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  import_id?: InputMaybe<Scalars['String']['input']>;
  import_source?: InputMaybe<Scalars['String']['input']>;
  integration_error_message?: InputMaybe<Scalars['String']['input']>;
  integration_last_synced_at?: InputMaybe<Scalars['timestamptz']['input']>;
  integration_record_id?: InputMaybe<Scalars['String']['input']>;
  integration_sync_status?: InputMaybe<Scalars['String']['input']>;
  integration_web_link?: InputMaybe<Scalars['String']['input']>;
  joined_practice_date?: InputMaybe<Scalars['date']['input']>;
  known_practice?: InputMaybe<Scalars['jsonb']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  lead_source?: InputMaybe<Scalars['jsonb']['input']>;
  lead_source_other?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['jsonb']['input']>;
  location_group?: InputMaybe<Scalars['jsonb']['input']>;
  membership_status?: InputMaybe<Scalars['String']['input']>;
  memberships?: InputMaybe<Scalars['jsonb']['input']>;
  merged_into?: InputMaybe<Scalars['jsonb']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  patient_agreement_accepted?: InputMaybe<Scalars['Boolean']['input']>;
  patient_agreement_accepted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phones?: InputMaybe<Scalars['jsonb']['input']>;
  practitioner?: InputMaybe<Scalars['jsonb']['input']>;
  practitioner_group?: InputMaybe<Scalars['jsonb']['input']>;
  preferred_language?: InputMaybe<Scalars['String']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  provider_web_link?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['String']['input']>;
  sponsorships?: InputMaybe<Scalars['jsonb']['input']>;
  ssn?: InputMaybe<Scalars['jsonb']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  terms_accepted?: InputMaybe<Scalars['Boolean']['input']>;
  terms_accepted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  uses_tobacco?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Hint_Patients_Max_Fields = {
  __typename?: 'hint_patients_max_fields';
  address_city?: Maybe<Scalars['String']['output']>;
  address_country?: Maybe<Scalars['String']['output']>;
  address_line1?: Maybe<Scalars['String']['output']>;
  address_line2?: Maybe<Scalars['String']['output']>;
  address_state?: Maybe<Scalars['String']['output']>;
  address_zip?: Maybe<Scalars['String']['output']>;
  age?: Maybe<Scalars['Int']['output']>;
  chosen_first_name?: Maybe<Scalars['String']['output']>;
  chosen_last_name?: Maybe<Scalars['String']['output']>;
  chosen_middle_name?: Maybe<Scalars['String']['output']>;
  chosen_suffix?: Maybe<Scalars['String']['output']>;
  chosen_title?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  dob?: Maybe<Scalars['date']['output']>;
  electronic_communication_consent_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  external_link_id?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  gender_identity?: Maybe<Scalars['String']['output']>;
  gender_other?: Maybe<Scalars['String']['output']>;
  health_insurance_group_id?: Maybe<Scalars['String']['output']>;
  health_insurance_member_id?: Maybe<Scalars['String']['output']>;
  health_insurance_payer_id?: Maybe<Scalars['String']['output']>;
  health_insurance_payer_name?: Maybe<Scalars['String']['output']>;
  hipaa_authorization_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  import_id?: Maybe<Scalars['String']['output']>;
  import_source?: Maybe<Scalars['String']['output']>;
  integration_error_message?: Maybe<Scalars['String']['output']>;
  integration_last_synced_at?: Maybe<Scalars['timestamptz']['output']>;
  integration_record_id?: Maybe<Scalars['String']['output']>;
  integration_sync_status?: Maybe<Scalars['String']['output']>;
  integration_web_link?: Maybe<Scalars['String']['output']>;
  joined_practice_date?: Maybe<Scalars['date']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  lead_source_other?: Maybe<Scalars['String']['output']>;
  membership_status?: Maybe<Scalars['String']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  patient_agreement_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
  preferred_language?: Maybe<Scalars['String']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  provider_web_link?: Maybe<Scalars['String']['output']>;
  sex?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  terms_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Hint_Patients_Min_Fields = {
  __typename?: 'hint_patients_min_fields';
  address_city?: Maybe<Scalars['String']['output']>;
  address_country?: Maybe<Scalars['String']['output']>;
  address_line1?: Maybe<Scalars['String']['output']>;
  address_line2?: Maybe<Scalars['String']['output']>;
  address_state?: Maybe<Scalars['String']['output']>;
  address_zip?: Maybe<Scalars['String']['output']>;
  age?: Maybe<Scalars['Int']['output']>;
  chosen_first_name?: Maybe<Scalars['String']['output']>;
  chosen_last_name?: Maybe<Scalars['String']['output']>;
  chosen_middle_name?: Maybe<Scalars['String']['output']>;
  chosen_suffix?: Maybe<Scalars['String']['output']>;
  chosen_title?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  dob?: Maybe<Scalars['date']['output']>;
  electronic_communication_consent_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  external_link_id?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  gender_identity?: Maybe<Scalars['String']['output']>;
  gender_other?: Maybe<Scalars['String']['output']>;
  health_insurance_group_id?: Maybe<Scalars['String']['output']>;
  health_insurance_member_id?: Maybe<Scalars['String']['output']>;
  health_insurance_payer_id?: Maybe<Scalars['String']['output']>;
  health_insurance_payer_name?: Maybe<Scalars['String']['output']>;
  hipaa_authorization_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  import_id?: Maybe<Scalars['String']['output']>;
  import_source?: Maybe<Scalars['String']['output']>;
  integration_error_message?: Maybe<Scalars['String']['output']>;
  integration_last_synced_at?: Maybe<Scalars['timestamptz']['output']>;
  integration_record_id?: Maybe<Scalars['String']['output']>;
  integration_sync_status?: Maybe<Scalars['String']['output']>;
  integration_web_link?: Maybe<Scalars['String']['output']>;
  joined_practice_date?: Maybe<Scalars['date']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  lead_source_other?: Maybe<Scalars['String']['output']>;
  membership_status?: Maybe<Scalars['String']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  patient_agreement_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
  preferred_language?: Maybe<Scalars['String']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  provider_web_link?: Maybe<Scalars['String']['output']>;
  sex?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  terms_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "hint_patients" */
export type Hint_Patients_Mutation_Response = {
  __typename?: 'hint_patients_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Hint_Patients>;
};

/** on_conflict condition type for table "hint_patients" */
export type Hint_Patients_On_Conflict = {
  constraint: Hint_Patients_Constraint;
  update_columns?: Array<Hint_Patients_Update_Column>;
  where?: InputMaybe<Hint_Patients_Bool_Exp>;
};

/** Ordering options when selecting data from "hint_patients". */
export type Hint_Patients_Order_By = {
  account?: InputMaybe<Order_By>;
  address_city?: InputMaybe<Order_By>;
  address_country?: InputMaybe<Order_By>;
  address_line1?: InputMaybe<Order_By>;
  address_line2?: InputMaybe<Order_By>;
  address_state?: InputMaybe<Order_By>;
  address_zip?: InputMaybe<Order_By>;
  age?: InputMaybe<Order_By>;
  chosen_first_name?: InputMaybe<Order_By>;
  chosen_last_name?: InputMaybe<Order_By>;
  chosen_middle_name?: InputMaybe<Order_By>;
  chosen_suffix?: InputMaybe<Order_By>;
  chosen_title?: InputMaybe<Order_By>;
  company?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dob?: InputMaybe<Order_By>;
  electronic_communication_consent_accepted?: InputMaybe<Order_By>;
  electronic_communication_consent_accepted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  external_link_id?: InputMaybe<Order_By>;
  external_records?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  gender_identity?: InputMaybe<Order_By>;
  gender_other?: InputMaybe<Order_By>;
  health_insurance_group_id?: InputMaybe<Order_By>;
  health_insurance_member_id?: InputMaybe<Order_By>;
  health_insurance_payer_id?: InputMaybe<Order_By>;
  health_insurance_payer_name?: InputMaybe<Order_By>;
  hipaa_authorization_accepted?: InputMaybe<Order_By>;
  hipaa_authorization_accepted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  import_id?: InputMaybe<Order_By>;
  import_source?: InputMaybe<Order_By>;
  integration_error_message?: InputMaybe<Order_By>;
  integration_last_synced_at?: InputMaybe<Order_By>;
  integration_record_id?: InputMaybe<Order_By>;
  integration_sync_status?: InputMaybe<Order_By>;
  integration_web_link?: InputMaybe<Order_By>;
  joined_practice_date?: InputMaybe<Order_By>;
  known_practice?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  lead_source?: InputMaybe<Order_By>;
  lead_source_other?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  location_group?: InputMaybe<Order_By>;
  membership_status?: InputMaybe<Order_By>;
  memberships?: InputMaybe<Order_By>;
  merged_into?: InputMaybe<Order_By>;
  middle_name?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  patient_agreement_accepted?: InputMaybe<Order_By>;
  patient_agreement_accepted_at?: InputMaybe<Order_By>;
  phones?: InputMaybe<Order_By>;
  practitioner?: InputMaybe<Order_By>;
  practitioner_group?: InputMaybe<Order_By>;
  preferred_language?: InputMaybe<Order_By>;
  pronouns?: InputMaybe<Order_By>;
  provider_web_link?: InputMaybe<Order_By>;
  sex?: InputMaybe<Order_By>;
  sponsorships?: InputMaybe<Order_By>;
  ssn?: InputMaybe<Order_By>;
  suffix?: InputMaybe<Order_By>;
  terms_accepted?: InputMaybe<Order_By>;
  terms_accepted_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  uses_tobacco?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hint_patients */
export type Hint_Patients_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Hint_Patients_Prepend_Input = {
  account?: InputMaybe<Scalars['jsonb']['input']>;
  company?: InputMaybe<Scalars['jsonb']['input']>;
  external_records?: InputMaybe<Scalars['jsonb']['input']>;
  known_practice?: InputMaybe<Scalars['jsonb']['input']>;
  lead_source?: InputMaybe<Scalars['jsonb']['input']>;
  location?: InputMaybe<Scalars['jsonb']['input']>;
  location_group?: InputMaybe<Scalars['jsonb']['input']>;
  memberships?: InputMaybe<Scalars['jsonb']['input']>;
  merged_into?: InputMaybe<Scalars['jsonb']['input']>;
  phones?: InputMaybe<Scalars['jsonb']['input']>;
  practitioner?: InputMaybe<Scalars['jsonb']['input']>;
  practitioner_group?: InputMaybe<Scalars['jsonb']['input']>;
  sponsorships?: InputMaybe<Scalars['jsonb']['input']>;
  ssn?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "hint_patients" */
export enum Hint_Patients_Select_Column {
  /** column name */
  Account = 'account',
  /** column name */
  AddressCity = 'address_city',
  /** column name */
  AddressCountry = 'address_country',
  /** column name */
  AddressLine1 = 'address_line1',
  /** column name */
  AddressLine2 = 'address_line2',
  /** column name */
  AddressState = 'address_state',
  /** column name */
  AddressZip = 'address_zip',
  /** column name */
  Age = 'age',
  /** column name */
  ChosenFirstName = 'chosen_first_name',
  /** column name */
  ChosenLastName = 'chosen_last_name',
  /** column name */
  ChosenMiddleName = 'chosen_middle_name',
  /** column name */
  ChosenSuffix = 'chosen_suffix',
  /** column name */
  ChosenTitle = 'chosen_title',
  /** column name */
  Company = 'company',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Dob = 'dob',
  /** column name */
  ElectronicCommunicationConsentAccepted = 'electronic_communication_consent_accepted',
  /** column name */
  ElectronicCommunicationConsentAcceptedAt = 'electronic_communication_consent_accepted_at',
  /** column name */
  Email = 'email',
  /** column name */
  ExternalLinkId = 'external_link_id',
  /** column name */
  ExternalRecords = 'external_records',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  GenderIdentity = 'gender_identity',
  /** column name */
  GenderOther = 'gender_other',
  /** column name */
  HealthInsuranceGroupId = 'health_insurance_group_id',
  /** column name */
  HealthInsuranceMemberId = 'health_insurance_member_id',
  /** column name */
  HealthInsurancePayerId = 'health_insurance_payer_id',
  /** column name */
  HealthInsurancePayerName = 'health_insurance_payer_name',
  /** column name */
  HipaaAuthorizationAccepted = 'hipaa_authorization_accepted',
  /** column name */
  HipaaAuthorizationAcceptedAt = 'hipaa_authorization_accepted_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImportId = 'import_id',
  /** column name */
  ImportSource = 'import_source',
  /** column name */
  IntegrationErrorMessage = 'integration_error_message',
  /** column name */
  IntegrationLastSyncedAt = 'integration_last_synced_at',
  /** column name */
  IntegrationRecordId = 'integration_record_id',
  /** column name */
  IntegrationSyncStatus = 'integration_sync_status',
  /** column name */
  IntegrationWebLink = 'integration_web_link',
  /** column name */
  JoinedPracticeDate = 'joined_practice_date',
  /** column name */
  KnownPractice = 'known_practice',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LeadSource = 'lead_source',
  /** column name */
  LeadSourceOther = 'lead_source_other',
  /** column name */
  Location = 'location',
  /** column name */
  LocationGroup = 'location_group',
  /** column name */
  MembershipStatus = 'membership_status',
  /** column name */
  Memberships = 'memberships',
  /** column name */
  MergedInto = 'merged_into',
  /** column name */
  MiddleName = 'middle_name',
  /** column name */
  Name = 'name',
  /** column name */
  PatientAgreementAccepted = 'patient_agreement_accepted',
  /** column name */
  PatientAgreementAcceptedAt = 'patient_agreement_accepted_at',
  /** column name */
  Phones = 'phones',
  /** column name */
  Practitioner = 'practitioner',
  /** column name */
  PractitionerGroup = 'practitioner_group',
  /** column name */
  PreferredLanguage = 'preferred_language',
  /** column name */
  Pronouns = 'pronouns',
  /** column name */
  ProviderWebLink = 'provider_web_link',
  /** column name */
  Sex = 'sex',
  /** column name */
  Sponsorships = 'sponsorships',
  /** column name */
  Ssn = 'ssn',
  /** column name */
  Suffix = 'suffix',
  /** column name */
  TermsAccepted = 'terms_accepted',
  /** column name */
  TermsAcceptedAt = 'terms_accepted_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UsesTobacco = 'uses_tobacco'
}

/** input type for updating data in table "hint_patients" */
export type Hint_Patients_Set_Input = {
  account?: InputMaybe<Scalars['jsonb']['input']>;
  address_city?: InputMaybe<Scalars['String']['input']>;
  address_country?: InputMaybe<Scalars['String']['input']>;
  address_line1?: InputMaybe<Scalars['String']['input']>;
  address_line2?: InputMaybe<Scalars['String']['input']>;
  address_state?: InputMaybe<Scalars['String']['input']>;
  address_zip?: InputMaybe<Scalars['String']['input']>;
  age?: InputMaybe<Scalars['Int']['input']>;
  chosen_first_name?: InputMaybe<Scalars['String']['input']>;
  chosen_last_name?: InputMaybe<Scalars['String']['input']>;
  chosen_middle_name?: InputMaybe<Scalars['String']['input']>;
  chosen_suffix?: InputMaybe<Scalars['String']['input']>;
  chosen_title?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dob?: InputMaybe<Scalars['date']['input']>;
  electronic_communication_consent_accepted?: InputMaybe<Scalars['Boolean']['input']>;
  electronic_communication_consent_accepted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  external_link_id?: InputMaybe<Scalars['String']['input']>;
  external_records?: InputMaybe<Scalars['jsonb']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  gender_identity?: InputMaybe<Scalars['String']['input']>;
  gender_other?: InputMaybe<Scalars['String']['input']>;
  health_insurance_group_id?: InputMaybe<Scalars['String']['input']>;
  health_insurance_member_id?: InputMaybe<Scalars['String']['input']>;
  health_insurance_payer_id?: InputMaybe<Scalars['String']['input']>;
  health_insurance_payer_name?: InputMaybe<Scalars['String']['input']>;
  hipaa_authorization_accepted?: InputMaybe<Scalars['Boolean']['input']>;
  hipaa_authorization_accepted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  import_id?: InputMaybe<Scalars['String']['input']>;
  import_source?: InputMaybe<Scalars['String']['input']>;
  integration_error_message?: InputMaybe<Scalars['String']['input']>;
  integration_last_synced_at?: InputMaybe<Scalars['timestamptz']['input']>;
  integration_record_id?: InputMaybe<Scalars['String']['input']>;
  integration_sync_status?: InputMaybe<Scalars['String']['input']>;
  integration_web_link?: InputMaybe<Scalars['String']['input']>;
  joined_practice_date?: InputMaybe<Scalars['date']['input']>;
  known_practice?: InputMaybe<Scalars['jsonb']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  lead_source?: InputMaybe<Scalars['jsonb']['input']>;
  lead_source_other?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['jsonb']['input']>;
  location_group?: InputMaybe<Scalars['jsonb']['input']>;
  membership_status?: InputMaybe<Scalars['String']['input']>;
  memberships?: InputMaybe<Scalars['jsonb']['input']>;
  merged_into?: InputMaybe<Scalars['jsonb']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  patient_agreement_accepted?: InputMaybe<Scalars['Boolean']['input']>;
  patient_agreement_accepted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phones?: InputMaybe<Scalars['jsonb']['input']>;
  practitioner?: InputMaybe<Scalars['jsonb']['input']>;
  practitioner_group?: InputMaybe<Scalars['jsonb']['input']>;
  preferred_language?: InputMaybe<Scalars['String']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  provider_web_link?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['String']['input']>;
  sponsorships?: InputMaybe<Scalars['jsonb']['input']>;
  ssn?: InputMaybe<Scalars['jsonb']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  terms_accepted?: InputMaybe<Scalars['Boolean']['input']>;
  terms_accepted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  uses_tobacco?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Hint_Patients_Stddev_Fields = {
  __typename?: 'hint_patients_stddev_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Hint_Patients_Stddev_Pop_Fields = {
  __typename?: 'hint_patients_stddev_pop_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Hint_Patients_Stddev_Samp_Fields = {
  __typename?: 'hint_patients_stddev_samp_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "hint_patients" */
export type Hint_Patients_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Hint_Patients_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Hint_Patients_Stream_Cursor_Value_Input = {
  account?: InputMaybe<Scalars['jsonb']['input']>;
  address_city?: InputMaybe<Scalars['String']['input']>;
  address_country?: InputMaybe<Scalars['String']['input']>;
  address_line1?: InputMaybe<Scalars['String']['input']>;
  address_line2?: InputMaybe<Scalars['String']['input']>;
  address_state?: InputMaybe<Scalars['String']['input']>;
  address_zip?: InputMaybe<Scalars['String']['input']>;
  age?: InputMaybe<Scalars['Int']['input']>;
  chosen_first_name?: InputMaybe<Scalars['String']['input']>;
  chosen_last_name?: InputMaybe<Scalars['String']['input']>;
  chosen_middle_name?: InputMaybe<Scalars['String']['input']>;
  chosen_suffix?: InputMaybe<Scalars['String']['input']>;
  chosen_title?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dob?: InputMaybe<Scalars['date']['input']>;
  electronic_communication_consent_accepted?: InputMaybe<Scalars['Boolean']['input']>;
  electronic_communication_consent_accepted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  external_link_id?: InputMaybe<Scalars['String']['input']>;
  external_records?: InputMaybe<Scalars['jsonb']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  gender_identity?: InputMaybe<Scalars['String']['input']>;
  gender_other?: InputMaybe<Scalars['String']['input']>;
  health_insurance_group_id?: InputMaybe<Scalars['String']['input']>;
  health_insurance_member_id?: InputMaybe<Scalars['String']['input']>;
  health_insurance_payer_id?: InputMaybe<Scalars['String']['input']>;
  health_insurance_payer_name?: InputMaybe<Scalars['String']['input']>;
  hipaa_authorization_accepted?: InputMaybe<Scalars['Boolean']['input']>;
  hipaa_authorization_accepted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  import_id?: InputMaybe<Scalars['String']['input']>;
  import_source?: InputMaybe<Scalars['String']['input']>;
  integration_error_message?: InputMaybe<Scalars['String']['input']>;
  integration_last_synced_at?: InputMaybe<Scalars['timestamptz']['input']>;
  integration_record_id?: InputMaybe<Scalars['String']['input']>;
  integration_sync_status?: InputMaybe<Scalars['String']['input']>;
  integration_web_link?: InputMaybe<Scalars['String']['input']>;
  joined_practice_date?: InputMaybe<Scalars['date']['input']>;
  known_practice?: InputMaybe<Scalars['jsonb']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  lead_source?: InputMaybe<Scalars['jsonb']['input']>;
  lead_source_other?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['jsonb']['input']>;
  location_group?: InputMaybe<Scalars['jsonb']['input']>;
  membership_status?: InputMaybe<Scalars['String']['input']>;
  memberships?: InputMaybe<Scalars['jsonb']['input']>;
  merged_into?: InputMaybe<Scalars['jsonb']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  patient_agreement_accepted?: InputMaybe<Scalars['Boolean']['input']>;
  patient_agreement_accepted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phones?: InputMaybe<Scalars['jsonb']['input']>;
  practitioner?: InputMaybe<Scalars['jsonb']['input']>;
  practitioner_group?: InputMaybe<Scalars['jsonb']['input']>;
  preferred_language?: InputMaybe<Scalars['String']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  provider_web_link?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['String']['input']>;
  sponsorships?: InputMaybe<Scalars['jsonb']['input']>;
  ssn?: InputMaybe<Scalars['jsonb']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  terms_accepted?: InputMaybe<Scalars['Boolean']['input']>;
  terms_accepted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  uses_tobacco?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Hint_Patients_Sum_Fields = {
  __typename?: 'hint_patients_sum_fields';
  age?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "hint_patients" */
export enum Hint_Patients_Update_Column {
  /** column name */
  Account = 'account',
  /** column name */
  AddressCity = 'address_city',
  /** column name */
  AddressCountry = 'address_country',
  /** column name */
  AddressLine1 = 'address_line1',
  /** column name */
  AddressLine2 = 'address_line2',
  /** column name */
  AddressState = 'address_state',
  /** column name */
  AddressZip = 'address_zip',
  /** column name */
  Age = 'age',
  /** column name */
  ChosenFirstName = 'chosen_first_name',
  /** column name */
  ChosenLastName = 'chosen_last_name',
  /** column name */
  ChosenMiddleName = 'chosen_middle_name',
  /** column name */
  ChosenSuffix = 'chosen_suffix',
  /** column name */
  ChosenTitle = 'chosen_title',
  /** column name */
  Company = 'company',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Dob = 'dob',
  /** column name */
  ElectronicCommunicationConsentAccepted = 'electronic_communication_consent_accepted',
  /** column name */
  ElectronicCommunicationConsentAcceptedAt = 'electronic_communication_consent_accepted_at',
  /** column name */
  Email = 'email',
  /** column name */
  ExternalLinkId = 'external_link_id',
  /** column name */
  ExternalRecords = 'external_records',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  GenderIdentity = 'gender_identity',
  /** column name */
  GenderOther = 'gender_other',
  /** column name */
  HealthInsuranceGroupId = 'health_insurance_group_id',
  /** column name */
  HealthInsuranceMemberId = 'health_insurance_member_id',
  /** column name */
  HealthInsurancePayerId = 'health_insurance_payer_id',
  /** column name */
  HealthInsurancePayerName = 'health_insurance_payer_name',
  /** column name */
  HipaaAuthorizationAccepted = 'hipaa_authorization_accepted',
  /** column name */
  HipaaAuthorizationAcceptedAt = 'hipaa_authorization_accepted_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImportId = 'import_id',
  /** column name */
  ImportSource = 'import_source',
  /** column name */
  IntegrationErrorMessage = 'integration_error_message',
  /** column name */
  IntegrationLastSyncedAt = 'integration_last_synced_at',
  /** column name */
  IntegrationRecordId = 'integration_record_id',
  /** column name */
  IntegrationSyncStatus = 'integration_sync_status',
  /** column name */
  IntegrationWebLink = 'integration_web_link',
  /** column name */
  JoinedPracticeDate = 'joined_practice_date',
  /** column name */
  KnownPractice = 'known_practice',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LeadSource = 'lead_source',
  /** column name */
  LeadSourceOther = 'lead_source_other',
  /** column name */
  Location = 'location',
  /** column name */
  LocationGroup = 'location_group',
  /** column name */
  MembershipStatus = 'membership_status',
  /** column name */
  Memberships = 'memberships',
  /** column name */
  MergedInto = 'merged_into',
  /** column name */
  MiddleName = 'middle_name',
  /** column name */
  Name = 'name',
  /** column name */
  PatientAgreementAccepted = 'patient_agreement_accepted',
  /** column name */
  PatientAgreementAcceptedAt = 'patient_agreement_accepted_at',
  /** column name */
  Phones = 'phones',
  /** column name */
  Practitioner = 'practitioner',
  /** column name */
  PractitionerGroup = 'practitioner_group',
  /** column name */
  PreferredLanguage = 'preferred_language',
  /** column name */
  Pronouns = 'pronouns',
  /** column name */
  ProviderWebLink = 'provider_web_link',
  /** column name */
  Sex = 'sex',
  /** column name */
  Sponsorships = 'sponsorships',
  /** column name */
  Ssn = 'ssn',
  /** column name */
  Suffix = 'suffix',
  /** column name */
  TermsAccepted = 'terms_accepted',
  /** column name */
  TermsAcceptedAt = 'terms_accepted_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UsesTobacco = 'uses_tobacco'
}

export type Hint_Patients_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Hint_Patients_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Hint_Patients_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Hint_Patients_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Hint_Patients_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Hint_Patients_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Hint_Patients_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hint_Patients_Set_Input>;
  /** filter the rows which have to be updated */
  where: Hint_Patients_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Hint_Patients_Var_Pop_Fields = {
  __typename?: 'hint_patients_var_pop_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Hint_Patients_Var_Samp_Fields = {
  __typename?: 'hint_patients_var_samp_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Hint_Patients_Variance_Fields = {
  __typename?: 'hint_patients_variance_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

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
  /** delete data from the table: "action_logs" */
  delete_action_logs?: Maybe<Action_Logs_Mutation_Response>;
  /** delete single row from the table: "action_logs" */
  delete_action_logs_by_pk?: Maybe<Action_Logs>;
  /** delete data from the table: "action_type" */
  delete_action_type?: Maybe<Action_Type_Mutation_Response>;
  /** delete single row from the table: "action_type" */
  delete_action_type_by_pk?: Maybe<Action_Type>;
  /** delete data from the table: "elation_patients" */
  delete_elation_patients?: Maybe<Elation_Patients_Mutation_Response>;
  /** delete single row from the table: "elation_patients" */
  delete_elation_patients_by_pk?: Maybe<Elation_Patients>;
  /** delete data from the table: "hint_patients" */
  delete_hint_patients?: Maybe<Hint_Patients_Mutation_Response>;
  /** delete single row from the table: "hint_patients" */
  delete_hint_patients_by_pk?: Maybe<Hint_Patients>;
  /** delete data from the table: "profiles" */
  delete_profiles?: Maybe<Profiles_Mutation_Response>;
  /** delete single row from the table: "profiles" */
  delete_profiles_by_pk?: Maybe<Profiles>;
  /** delete data from the table: "providers" */
  delete_providers?: Maybe<Providers_Mutation_Response>;
  /** delete single row from the table: "providers" */
  delete_providers_by_pk?: Maybe<Providers>;
  /** insert data into the table: "action_logs" */
  insert_action_logs?: Maybe<Action_Logs_Mutation_Response>;
  /** insert a single row into the table: "action_logs" */
  insert_action_logs_one?: Maybe<Action_Logs>;
  /** insert data into the table: "action_type" */
  insert_action_type?: Maybe<Action_Type_Mutation_Response>;
  /** insert a single row into the table: "action_type" */
  insert_action_type_one?: Maybe<Action_Type>;
  /** insert data into the table: "elation_patients" */
  insert_elation_patients?: Maybe<Elation_Patients_Mutation_Response>;
  /** insert a single row into the table: "elation_patients" */
  insert_elation_patients_one?: Maybe<Elation_Patients>;
  /** insert data into the table: "hint_patients" */
  insert_hint_patients?: Maybe<Hint_Patients_Mutation_Response>;
  /** insert a single row into the table: "hint_patients" */
  insert_hint_patients_one?: Maybe<Hint_Patients>;
  /** insert data into the table: "profiles" */
  insert_profiles?: Maybe<Profiles_Mutation_Response>;
  /** insert a single row into the table: "profiles" */
  insert_profiles_one?: Maybe<Profiles>;
  /** insert data into the table: "providers" */
  insert_providers?: Maybe<Providers_Mutation_Response>;
  /** insert a single row into the table: "providers" */
  insert_providers_one?: Maybe<Providers>;
  /** update data of the table: "action_logs" */
  update_action_logs?: Maybe<Action_Logs_Mutation_Response>;
  /** update single row of the table: "action_logs" */
  update_action_logs_by_pk?: Maybe<Action_Logs>;
  /** update multiples rows of table: "action_logs" */
  update_action_logs_many?: Maybe<Array<Maybe<Action_Logs_Mutation_Response>>>;
  /** update data of the table: "action_type" */
  update_action_type?: Maybe<Action_Type_Mutation_Response>;
  /** update single row of the table: "action_type" */
  update_action_type_by_pk?: Maybe<Action_Type>;
  /** update multiples rows of table: "action_type" */
  update_action_type_many?: Maybe<Array<Maybe<Action_Type_Mutation_Response>>>;
  /** update data of the table: "elation_patients" */
  update_elation_patients?: Maybe<Elation_Patients_Mutation_Response>;
  /** update single row of the table: "elation_patients" */
  update_elation_patients_by_pk?: Maybe<Elation_Patients>;
  /** update multiples rows of table: "elation_patients" */
  update_elation_patients_many?: Maybe<Array<Maybe<Elation_Patients_Mutation_Response>>>;
  /** update data of the table: "hint_patients" */
  update_hint_patients?: Maybe<Hint_Patients_Mutation_Response>;
  /** update single row of the table: "hint_patients" */
  update_hint_patients_by_pk?: Maybe<Hint_Patients>;
  /** update multiples rows of table: "hint_patients" */
  update_hint_patients_many?: Maybe<Array<Maybe<Hint_Patients_Mutation_Response>>>;
  /** update data of the table: "profiles" */
  update_profiles?: Maybe<Profiles_Mutation_Response>;
  /** update single row of the table: "profiles" */
  update_profiles_by_pk?: Maybe<Profiles>;
  /** update multiples rows of table: "profiles" */
  update_profiles_many?: Maybe<Array<Maybe<Profiles_Mutation_Response>>>;
  /** update data of the table: "providers" */
  update_providers?: Maybe<Providers_Mutation_Response>;
  /** update single row of the table: "providers" */
  update_providers_by_pk?: Maybe<Providers>;
  /** update multiples rows of table: "providers" */
  update_providers_many?: Maybe<Array<Maybe<Providers_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Action_LogsArgs = {
  where: Action_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Action_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Action_TypeArgs = {
  where: Action_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Action_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Elation_PatientsArgs = {
  where: Elation_Patients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Elation_Patients_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Hint_PatientsArgs = {
  where: Hint_Patients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hint_Patients_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProfilesArgs = {
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profiles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProvidersArgs = {
  where: Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Providers_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Action_LogsArgs = {
  objects: Array<Action_Logs_Insert_Input>;
  on_conflict?: InputMaybe<Action_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Action_Logs_OneArgs = {
  object: Action_Logs_Insert_Input;
  on_conflict?: InputMaybe<Action_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Action_TypeArgs = {
  objects: Array<Action_Type_Insert_Input>;
  on_conflict?: InputMaybe<Action_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Action_Type_OneArgs = {
  object: Action_Type_Insert_Input;
  on_conflict?: InputMaybe<Action_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Elation_PatientsArgs = {
  objects: Array<Elation_Patients_Insert_Input>;
  on_conflict?: InputMaybe<Elation_Patients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Elation_Patients_OneArgs = {
  object: Elation_Patients_Insert_Input;
  on_conflict?: InputMaybe<Elation_Patients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hint_PatientsArgs = {
  objects: Array<Hint_Patients_Insert_Input>;
  on_conflict?: InputMaybe<Hint_Patients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hint_Patients_OneArgs = {
  object: Hint_Patients_Insert_Input;
  on_conflict?: InputMaybe<Hint_Patients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProfilesArgs = {
  objects: Array<Profiles_Insert_Input>;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profiles_OneArgs = {
  object: Profiles_Insert_Input;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProvidersArgs = {
  objects: Array<Providers_Insert_Input>;
  on_conflict?: InputMaybe<Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Providers_OneArgs = {
  object: Providers_Insert_Input;
  on_conflict?: InputMaybe<Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Action_LogsArgs = {
  _set?: InputMaybe<Action_Logs_Set_Input>;
  where: Action_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Action_Logs_By_PkArgs = {
  _set?: InputMaybe<Action_Logs_Set_Input>;
  pk_columns: Action_Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Action_Logs_ManyArgs = {
  updates: Array<Action_Logs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Action_TypeArgs = {
  _set?: InputMaybe<Action_Type_Set_Input>;
  where: Action_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Action_Type_By_PkArgs = {
  _set?: InputMaybe<Action_Type_Set_Input>;
  pk_columns: Action_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Action_Type_ManyArgs = {
  updates: Array<Action_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Elation_PatientsArgs = {
  _append?: InputMaybe<Elation_Patients_Append_Input>;
  _delete_at_path?: InputMaybe<Elation_Patients_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Elation_Patients_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Elation_Patients_Delete_Key_Input>;
  _inc?: InputMaybe<Elation_Patients_Inc_Input>;
  _prepend?: InputMaybe<Elation_Patients_Prepend_Input>;
  _set?: InputMaybe<Elation_Patients_Set_Input>;
  where: Elation_Patients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Elation_Patients_By_PkArgs = {
  _append?: InputMaybe<Elation_Patients_Append_Input>;
  _delete_at_path?: InputMaybe<Elation_Patients_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Elation_Patients_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Elation_Patients_Delete_Key_Input>;
  _inc?: InputMaybe<Elation_Patients_Inc_Input>;
  _prepend?: InputMaybe<Elation_Patients_Prepend_Input>;
  _set?: InputMaybe<Elation_Patients_Set_Input>;
  pk_columns: Elation_Patients_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Elation_Patients_ManyArgs = {
  updates: Array<Elation_Patients_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Hint_PatientsArgs = {
  _append?: InputMaybe<Hint_Patients_Append_Input>;
  _delete_at_path?: InputMaybe<Hint_Patients_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Hint_Patients_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Hint_Patients_Delete_Key_Input>;
  _inc?: InputMaybe<Hint_Patients_Inc_Input>;
  _prepend?: InputMaybe<Hint_Patients_Prepend_Input>;
  _set?: InputMaybe<Hint_Patients_Set_Input>;
  where: Hint_Patients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hint_Patients_By_PkArgs = {
  _append?: InputMaybe<Hint_Patients_Append_Input>;
  _delete_at_path?: InputMaybe<Hint_Patients_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Hint_Patients_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Hint_Patients_Delete_Key_Input>;
  _inc?: InputMaybe<Hint_Patients_Inc_Input>;
  _prepend?: InputMaybe<Hint_Patients_Prepend_Input>;
  _set?: InputMaybe<Hint_Patients_Set_Input>;
  pk_columns: Hint_Patients_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hint_Patients_ManyArgs = {
  updates: Array<Hint_Patients_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProfilesArgs = {
  _set?: InputMaybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_By_PkArgs = {
  _set?: InputMaybe<Profiles_Set_Input>;
  pk_columns: Profiles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_ManyArgs = {
  updates: Array<Profiles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProvidersArgs = {
  _set?: InputMaybe<Providers_Set_Input>;
  where: Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Providers_By_PkArgs = {
  _set?: InputMaybe<Providers_Set_Input>;
  pk_columns: Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Providers_ManyArgs = {
  updates: Array<Providers_Updates>;
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

/** columns and relationships of "profiles" */
export type Profiles = {
  __typename?: 'profiles';
  address_line_1?: Maybe<Scalars['String']['output']>;
  address_line_2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  elation_patient_id?: Maybe<Scalars['String']['output']>;
  emails?: Maybe<Array<Scalars['String']['output']>>;
  first_name: Scalars['String']['output'];
  gender?: Maybe<Scalars['String']['output']>;
  hint_patient_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  last_name: Scalars['String']['output'];
  last_updated_from?: Maybe<Providers_Enum>;
  middle_name?: Maybe<Scalars['String']['output']>;
  phone_numbers?: Maybe<Array<Scalars['String']['output']>>;
  state?: Maybe<Scalars['String']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "profiles" */
export type Profiles_Aggregate = {
  __typename?: 'profiles_aggregate';
  aggregate?: Maybe<Profiles_Aggregate_Fields>;
  nodes: Array<Profiles>;
};

/** aggregate fields of "profiles" */
export type Profiles_Aggregate_Fields = {
  __typename?: 'profiles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Profiles_Max_Fields>;
  min?: Maybe<Profiles_Min_Fields>;
};


/** aggregate fields of "profiles" */
export type Profiles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  _and?: InputMaybe<Array<Profiles_Bool_Exp>>;
  _not?: InputMaybe<Profiles_Bool_Exp>;
  _or?: InputMaybe<Array<Profiles_Bool_Exp>>;
  address_line_1?: InputMaybe<String_Comparison_Exp>;
  address_line_2?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  deleted?: InputMaybe<Boolean_Comparison_Exp>;
  elation_patient_id?: InputMaybe<String_Comparison_Exp>;
  emails?: InputMaybe<String_Array_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  hint_patient_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  last_updated_from?: InputMaybe<Providers_Enum_Comparison_Exp>;
  middle_name?: InputMaybe<String_Comparison_Exp>;
  phone_numbers?: InputMaybe<String_Array_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  zip_code?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "profiles" */
export enum Profiles_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProfilesPkey = 'profiles_pkey'
}

/** input type for inserting data into table "profiles" */
export type Profiles_Insert_Input = {
  address_line_1?: InputMaybe<Scalars['String']['input']>;
  address_line_2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  elation_patient_id?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Array<Scalars['String']['input']>>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hint_patient_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_updated_from?: InputMaybe<Providers_Enum>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  phone_numbers?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Profiles_Max_Fields = {
  __typename?: 'profiles_max_fields';
  address_line_1?: Maybe<Scalars['String']['output']>;
  address_line_2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  elation_patient_id?: Maybe<Scalars['String']['output']>;
  emails?: Maybe<Array<Scalars['String']['output']>>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  hint_patient_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
  phone_numbers?: Maybe<Array<Scalars['String']['output']>>;
  state?: Maybe<Scalars['String']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Profiles_Min_Fields = {
  __typename?: 'profiles_min_fields';
  address_line_1?: Maybe<Scalars['String']['output']>;
  address_line_2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  elation_patient_id?: Maybe<Scalars['String']['output']>;
  emails?: Maybe<Array<Scalars['String']['output']>>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  hint_patient_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
  phone_numbers?: Maybe<Array<Scalars['String']['output']>>;
  state?: Maybe<Scalars['String']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "profiles" */
export type Profiles_Mutation_Response = {
  __typename?: 'profiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Profiles>;
};

/** on_conflict condition type for table "profiles" */
export type Profiles_On_Conflict = {
  constraint: Profiles_Constraint;
  update_columns?: Array<Profiles_Update_Column>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

/** Ordering options when selecting data from "profiles". */
export type Profiles_Order_By = {
  address_line_1?: InputMaybe<Order_By>;
  address_line_2?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  deleted?: InputMaybe<Order_By>;
  elation_patient_id?: InputMaybe<Order_By>;
  emails?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  hint_patient_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  last_updated_from?: InputMaybe<Order_By>;
  middle_name?: InputMaybe<Order_By>;
  phone_numbers?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  zip_code?: InputMaybe<Order_By>;
};

/** primary key columns input for table: profiles */
export type Profiles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "profiles" */
export enum Profiles_Select_Column {
  /** column name */
  AddressLine_1 = 'address_line_1',
  /** column name */
  AddressLine_2 = 'address_line_2',
  /** column name */
  City = 'city',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  ElationPatientId = 'elation_patient_id',
  /** column name */
  Emails = 'emails',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  HintPatientId = 'hint_patient_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastUpdatedFrom = 'last_updated_from',
  /** column name */
  MiddleName = 'middle_name',
  /** column name */
  PhoneNumbers = 'phone_numbers',
  /** column name */
  State = 'state',
  /** column name */
  ZipCode = 'zip_code'
}

/** input type for updating data in table "profiles" */
export type Profiles_Set_Input = {
  address_line_1?: InputMaybe<Scalars['String']['input']>;
  address_line_2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  elation_patient_id?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Array<Scalars['String']['input']>>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hint_patient_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_updated_from?: InputMaybe<Providers_Enum>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  phone_numbers?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "profiles" */
export type Profiles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Profiles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Profiles_Stream_Cursor_Value_Input = {
  address_line_1?: InputMaybe<Scalars['String']['input']>;
  address_line_2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  elation_patient_id?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Array<Scalars['String']['input']>>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hint_patient_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_updated_from?: InputMaybe<Providers_Enum>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  phone_numbers?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "profiles" */
export enum Profiles_Update_Column {
  /** column name */
  AddressLine_1 = 'address_line_1',
  /** column name */
  AddressLine_2 = 'address_line_2',
  /** column name */
  City = 'city',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  ElationPatientId = 'elation_patient_id',
  /** column name */
  Emails = 'emails',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  HintPatientId = 'hint_patient_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastUpdatedFrom = 'last_updated_from',
  /** column name */
  MiddleName = 'middle_name',
  /** column name */
  PhoneNumbers = 'phone_numbers',
  /** column name */
  State = 'state',
  /** column name */
  ZipCode = 'zip_code'
}

export type Profiles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Profiles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Profiles_Bool_Exp;
};

/** columns and relationships of "providers" */
export type Providers = {
  __typename?: 'providers';
  value: Scalars['String']['output'];
};

/** aggregated selection of "providers" */
export type Providers_Aggregate = {
  __typename?: 'providers_aggregate';
  aggregate?: Maybe<Providers_Aggregate_Fields>;
  nodes: Array<Providers>;
};

/** aggregate fields of "providers" */
export type Providers_Aggregate_Fields = {
  __typename?: 'providers_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Providers_Max_Fields>;
  min?: Maybe<Providers_Min_Fields>;
};


/** aggregate fields of "providers" */
export type Providers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Providers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "providers". All fields are combined with a logical 'AND'. */
export type Providers_Bool_Exp = {
  _and?: InputMaybe<Array<Providers_Bool_Exp>>;
  _not?: InputMaybe<Providers_Bool_Exp>;
  _or?: InputMaybe<Array<Providers_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "providers" */
export enum Providers_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProvidersPkey = 'providers_pkey'
}

export enum Providers_Enum {
  Dialpad = 'DIALPAD',
  Elation = 'ELATION',
  Hint = 'HINT'
}

/** Boolean expression to compare columns of type "providers_enum". All fields are combined with logical 'AND'. */
export type Providers_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Providers_Enum>;
  _in?: InputMaybe<Array<Providers_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Providers_Enum>;
  _nin?: InputMaybe<Array<Providers_Enum>>;
};

/** input type for inserting data into table "providers" */
export type Providers_Insert_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Providers_Max_Fields = {
  __typename?: 'providers_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Providers_Min_Fields = {
  __typename?: 'providers_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "providers" */
export type Providers_Mutation_Response = {
  __typename?: 'providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Providers>;
};

/** on_conflict condition type for table "providers" */
export type Providers_On_Conflict = {
  constraint: Providers_Constraint;
  update_columns?: Array<Providers_Update_Column>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "providers". */
export type Providers_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: providers */
export type Providers_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "providers" */
export enum Providers_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "providers" */
export type Providers_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "providers" */
export type Providers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Providers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Providers_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "providers" */
export enum Providers_Update_Column {
  /** column name */
  Value = 'value'
}

export type Providers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Providers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Providers_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "action_logs" */
  action_logs: Array<Action_Logs>;
  /** fetch aggregated fields from the table: "action_logs" */
  action_logs_aggregate: Action_Logs_Aggregate;
  /** fetch data from the table: "action_logs" using primary key columns */
  action_logs_by_pk?: Maybe<Action_Logs>;
  /** fetch data from the table: "action_type" */
  action_type: Array<Action_Type>;
  /** fetch aggregated fields from the table: "action_type" */
  action_type_aggregate: Action_Type_Aggregate;
  /** fetch data from the table: "action_type" using primary key columns */
  action_type_by_pk?: Maybe<Action_Type>;
  /** fetch data from the table: "elation_patients" */
  elation_patients: Array<Elation_Patients>;
  /** fetch aggregated fields from the table: "elation_patients" */
  elation_patients_aggregate: Elation_Patients_Aggregate;
  /** fetch data from the table: "elation_patients" using primary key columns */
  elation_patients_by_pk?: Maybe<Elation_Patients>;
  /** fetch data from the table: "hint_patients" */
  hint_patients: Array<Hint_Patients>;
  /** fetch aggregated fields from the table: "hint_patients" */
  hint_patients_aggregate: Hint_Patients_Aggregate;
  /** fetch data from the table: "hint_patients" using primary key columns */
  hint_patients_by_pk?: Maybe<Hint_Patients>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table: "providers" */
  providers: Array<Providers>;
  /** fetch aggregated fields from the table: "providers" */
  providers_aggregate: Providers_Aggregate;
  /** fetch data from the table: "providers" using primary key columns */
  providers_by_pk?: Maybe<Providers>;
};


export type Query_RootAction_LogsArgs = {
  distinct_on?: InputMaybe<Array<Action_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Action_Logs_Order_By>>;
  where?: InputMaybe<Action_Logs_Bool_Exp>;
};


export type Query_RootAction_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Action_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Action_Logs_Order_By>>;
  where?: InputMaybe<Action_Logs_Bool_Exp>;
};


export type Query_RootAction_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAction_TypeArgs = {
  distinct_on?: InputMaybe<Array<Action_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Action_Type_Order_By>>;
  where?: InputMaybe<Action_Type_Bool_Exp>;
};


export type Query_RootAction_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Action_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Action_Type_Order_By>>;
  where?: InputMaybe<Action_Type_Bool_Exp>;
};


export type Query_RootAction_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootElation_PatientsArgs = {
  distinct_on?: InputMaybe<Array<Elation_Patients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Elation_Patients_Order_By>>;
  where?: InputMaybe<Elation_Patients_Bool_Exp>;
};


export type Query_RootElation_Patients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Elation_Patients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Elation_Patients_Order_By>>;
  where?: InputMaybe<Elation_Patients_Bool_Exp>;
};


export type Query_RootElation_Patients_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootHint_PatientsArgs = {
  distinct_on?: InputMaybe<Array<Hint_Patients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hint_Patients_Order_By>>;
  where?: InputMaybe<Hint_Patients_Bool_Exp>;
};


export type Query_RootHint_Patients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hint_Patients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hint_Patients_Order_By>>;
  where?: InputMaybe<Hint_Patients_Bool_Exp>;
};


export type Query_RootHint_Patients_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProvidersArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};


export type Query_RootProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};


export type Query_RootProviders_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "action_logs" */
  action_logs: Array<Action_Logs>;
  /** fetch aggregated fields from the table: "action_logs" */
  action_logs_aggregate: Action_Logs_Aggregate;
  /** fetch data from the table: "action_logs" using primary key columns */
  action_logs_by_pk?: Maybe<Action_Logs>;
  /** fetch data from the table in a streaming manner: "action_logs" */
  action_logs_stream: Array<Action_Logs>;
  /** fetch data from the table: "action_type" */
  action_type: Array<Action_Type>;
  /** fetch aggregated fields from the table: "action_type" */
  action_type_aggregate: Action_Type_Aggregate;
  /** fetch data from the table: "action_type" using primary key columns */
  action_type_by_pk?: Maybe<Action_Type>;
  /** fetch data from the table in a streaming manner: "action_type" */
  action_type_stream: Array<Action_Type>;
  /** fetch data from the table: "elation_patients" */
  elation_patients: Array<Elation_Patients>;
  /** fetch aggregated fields from the table: "elation_patients" */
  elation_patients_aggregate: Elation_Patients_Aggregate;
  /** fetch data from the table: "elation_patients" using primary key columns */
  elation_patients_by_pk?: Maybe<Elation_Patients>;
  /** fetch data from the table in a streaming manner: "elation_patients" */
  elation_patients_stream: Array<Elation_Patients>;
  /** fetch data from the table: "hint_patients" */
  hint_patients: Array<Hint_Patients>;
  /** fetch aggregated fields from the table: "hint_patients" */
  hint_patients_aggregate: Hint_Patients_Aggregate;
  /** fetch data from the table: "hint_patients" using primary key columns */
  hint_patients_by_pk?: Maybe<Hint_Patients>;
  /** fetch data from the table in a streaming manner: "hint_patients" */
  hint_patients_stream: Array<Hint_Patients>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table in a streaming manner: "profiles" */
  profiles_stream: Array<Profiles>;
  /** fetch data from the table: "providers" */
  providers: Array<Providers>;
  /** fetch aggregated fields from the table: "providers" */
  providers_aggregate: Providers_Aggregate;
  /** fetch data from the table: "providers" using primary key columns */
  providers_by_pk?: Maybe<Providers>;
  /** fetch data from the table in a streaming manner: "providers" */
  providers_stream: Array<Providers>;
};


export type Subscription_RootAction_LogsArgs = {
  distinct_on?: InputMaybe<Array<Action_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Action_Logs_Order_By>>;
  where?: InputMaybe<Action_Logs_Bool_Exp>;
};


export type Subscription_RootAction_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Action_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Action_Logs_Order_By>>;
  where?: InputMaybe<Action_Logs_Bool_Exp>;
};


export type Subscription_RootAction_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAction_Logs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Action_Logs_Stream_Cursor_Input>>;
  where?: InputMaybe<Action_Logs_Bool_Exp>;
};


export type Subscription_RootAction_TypeArgs = {
  distinct_on?: InputMaybe<Array<Action_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Action_Type_Order_By>>;
  where?: InputMaybe<Action_Type_Bool_Exp>;
};


export type Subscription_RootAction_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Action_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Action_Type_Order_By>>;
  where?: InputMaybe<Action_Type_Bool_Exp>;
};


export type Subscription_RootAction_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootAction_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Action_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Action_Type_Bool_Exp>;
};


export type Subscription_RootElation_PatientsArgs = {
  distinct_on?: InputMaybe<Array<Elation_Patients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Elation_Patients_Order_By>>;
  where?: InputMaybe<Elation_Patients_Bool_Exp>;
};


export type Subscription_RootElation_Patients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Elation_Patients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Elation_Patients_Order_By>>;
  where?: InputMaybe<Elation_Patients_Bool_Exp>;
};


export type Subscription_RootElation_Patients_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootElation_Patients_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Elation_Patients_Stream_Cursor_Input>>;
  where?: InputMaybe<Elation_Patients_Bool_Exp>;
};


export type Subscription_RootHint_PatientsArgs = {
  distinct_on?: InputMaybe<Array<Hint_Patients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hint_Patients_Order_By>>;
  where?: InputMaybe<Hint_Patients_Bool_Exp>;
};


export type Subscription_RootHint_Patients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hint_Patients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hint_Patients_Order_By>>;
  where?: InputMaybe<Hint_Patients_Bool_Exp>;
};


export type Subscription_RootHint_Patients_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootHint_Patients_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Hint_Patients_Stream_Cursor_Input>>;
  where?: InputMaybe<Hint_Patients_Bool_Exp>;
};


export type Subscription_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProfiles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Profiles_Stream_Cursor_Input>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProvidersArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};


export type Subscription_RootProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};


export type Subscription_RootProviders_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootProviders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Providers_Stream_Cursor_Input>>;
  where?: InputMaybe<Providers_Bool_Exp>;
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

export type GetActionLogsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetActionLogsSubscription = { __typename?: 'subscription_root', action_logs: Array<{ __typename?: 'action_logs', id: any, type: Action_Type_Enum, date: Date, provider: Providers_Enum, extra_data?: any | null }> };

export type GetActionLogsOnceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActionLogsOnceQuery = { __typename?: 'query_root', action_logs: Array<{ __typename?: 'action_logs', id: any, type: Action_Type_Enum, date: Date, provider: Providers_Enum, extra_data?: any | null }> };

export type GetProfilesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetProfilesSubscription = { __typename?: 'subscription_root', profiles: Array<{ __typename?: 'profiles', id: any, first_name: string, last_name: string, middle_name?: string | null, phone_numbers?: Array<string> | null, emails?: Array<string> | null, gender?: string | null, address_line_1?: string | null, address_line_2?: string | null, city?: string | null, state?: string | null, zip_code?: string | null, last_updated_from?: Providers_Enum | null, elation_patient_id?: string | null, hint_patient_id?: string | null, deleted?: boolean | null }> };

export type GetProfilesOnceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfilesOnceQuery = { __typename?: 'query_root', profiles: Array<{ __typename?: 'profiles', id: any, first_name: string, last_name: string, middle_name?: string | null, phone_numbers?: Array<string> | null, emails?: Array<string> | null, gender?: string | null, address_line_1?: string | null, address_line_2?: string | null, city?: string | null, state?: string | null, zip_code?: string | null, last_updated_from?: Providers_Enum | null, elation_patient_id?: string | null, hint_patient_id?: string | null, deleted?: boolean | null }> };

export type GetHintPatientsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetHintPatientsSubscription = { __typename?: 'subscription_root', hint_patients: Array<{ __typename?: 'hint_patients', id: string, first_name?: string | null, last_name?: string | null, middle_name?: string | null, name?: string | null, dob?: any | null, gender?: string | null, email?: string | null, phones?: any | null, address_line1?: string | null, address_line2?: string | null, address_city?: string | null, address_state?: string | null, address_zip?: string | null, updated_at: Date, created_at: Date }> };

export type GetElationPatientsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetElationPatientsSubscription = { __typename?: 'subscription_root', elation_patients: Array<{ __typename?: 'elation_patients', id: number, first_name: string, last_name: string, middle_name?: string | null, dob: any, sex: string, emails?: any | null, phones?: any | null, address_line1?: string | null, address_line2?: string | null, city?: string | null, state?: string | null, zip?: string | null, created_date: Date, last_modified?: Date | null }> };


export const GetActionLogsDocument = gql`
    subscription GetActionLogs {
  action_logs(order_by: {date: desc}, limit: 60) {
    id
    type
    date
    provider
    extra_data
  }
}
    `;

/**
 * __useGetActionLogsSubscription__
 *
 * To run a query within a React component, call `useGetActionLogsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetActionLogsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActionLogsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetActionLogsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetActionLogsSubscription, GetActionLogsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetActionLogsSubscription, GetActionLogsSubscriptionVariables>(GetActionLogsDocument, options);
      }
export type GetActionLogsSubscriptionHookResult = ReturnType<typeof useGetActionLogsSubscription>;
export type GetActionLogsSubscriptionResult = Apollo.SubscriptionResult<GetActionLogsSubscription>;
export const GetActionLogsOnceDocument = gql`
    query GetActionLogsOnce {
  action_logs(order_by: {date: desc}, limit: 60) {
    id
    type
    date
    provider
    extra_data
  }
}
    `;

/**
 * __useGetActionLogsOnceQuery__
 *
 * To run a query within a React component, call `useGetActionLogsOnceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActionLogsOnceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActionLogsOnceQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetActionLogsOnceQuery(baseOptions?: Apollo.QueryHookOptions<GetActionLogsOnceQuery, GetActionLogsOnceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActionLogsOnceQuery, GetActionLogsOnceQueryVariables>(GetActionLogsOnceDocument, options);
      }
export function useGetActionLogsOnceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActionLogsOnceQuery, GetActionLogsOnceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActionLogsOnceQuery, GetActionLogsOnceQueryVariables>(GetActionLogsOnceDocument, options);
        }
export function useGetActionLogsOnceSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetActionLogsOnceQuery, GetActionLogsOnceQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetActionLogsOnceQuery, GetActionLogsOnceQueryVariables>(GetActionLogsOnceDocument, options);
        }
export type GetActionLogsOnceQueryHookResult = ReturnType<typeof useGetActionLogsOnceQuery>;
export type GetActionLogsOnceLazyQueryHookResult = ReturnType<typeof useGetActionLogsOnceLazyQuery>;
export type GetActionLogsOnceSuspenseQueryHookResult = ReturnType<typeof useGetActionLogsOnceSuspenseQuery>;
export type GetActionLogsOnceQueryResult = Apollo.QueryResult<GetActionLogsOnceQuery, GetActionLogsOnceQueryVariables>;
export const GetProfilesDocument = gql`
    subscription GetProfiles {
  profiles(order_by: {last_updated_from: desc}) {
    id
    first_name
    last_name
    middle_name
    phone_numbers
    emails
    gender
    address_line_1
    address_line_2
    city
    state
    zip_code
    last_updated_from
    elation_patient_id
    hint_patient_id
    deleted
  }
}
    `;

/**
 * __useGetProfilesSubscription__
 *
 * To run a query within a React component, call `useGetProfilesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetProfilesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfilesSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetProfilesSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetProfilesSubscription, GetProfilesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetProfilesSubscription, GetProfilesSubscriptionVariables>(GetProfilesDocument, options);
      }
export type GetProfilesSubscriptionHookResult = ReturnType<typeof useGetProfilesSubscription>;
export type GetProfilesSubscriptionResult = Apollo.SubscriptionResult<GetProfilesSubscription>;
export const GetProfilesOnceDocument = gql`
    query GetProfilesOnce {
  profiles(order_by: {last_updated_from: desc}) {
    id
    first_name
    last_name
    middle_name
    phone_numbers
    emails
    gender
    address_line_1
    address_line_2
    city
    state
    zip_code
    last_updated_from
    elation_patient_id
    hint_patient_id
    deleted
  }
}
    `;

/**
 * __useGetProfilesOnceQuery__
 *
 * To run a query within a React component, call `useGetProfilesOnceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfilesOnceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfilesOnceQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfilesOnceQuery(baseOptions?: Apollo.QueryHookOptions<GetProfilesOnceQuery, GetProfilesOnceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfilesOnceQuery, GetProfilesOnceQueryVariables>(GetProfilesOnceDocument, options);
      }
export function useGetProfilesOnceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfilesOnceQuery, GetProfilesOnceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfilesOnceQuery, GetProfilesOnceQueryVariables>(GetProfilesOnceDocument, options);
        }
export function useGetProfilesOnceSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProfilesOnceQuery, GetProfilesOnceQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfilesOnceQuery, GetProfilesOnceQueryVariables>(GetProfilesOnceDocument, options);
        }
export type GetProfilesOnceQueryHookResult = ReturnType<typeof useGetProfilesOnceQuery>;
export type GetProfilesOnceLazyQueryHookResult = ReturnType<typeof useGetProfilesOnceLazyQuery>;
export type GetProfilesOnceSuspenseQueryHookResult = ReturnType<typeof useGetProfilesOnceSuspenseQuery>;
export type GetProfilesOnceQueryResult = Apollo.QueryResult<GetProfilesOnceQuery, GetProfilesOnceQueryVariables>;
export const GetHintPatientsDocument = gql`
    subscription GetHintPatients {
  hint_patients {
    id
    first_name
    last_name
    middle_name
    name
    dob
    gender
    email
    phones
    address_line1
    address_line2
    address_city
    address_state
    address_zip
    updated_at
    created_at
  }
}
    `;

/**
 * __useGetHintPatientsSubscription__
 *
 * To run a query within a React component, call `useGetHintPatientsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetHintPatientsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHintPatientsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetHintPatientsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetHintPatientsSubscription, GetHintPatientsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetHintPatientsSubscription, GetHintPatientsSubscriptionVariables>(GetHintPatientsDocument, options);
      }
export type GetHintPatientsSubscriptionHookResult = ReturnType<typeof useGetHintPatientsSubscription>;
export type GetHintPatientsSubscriptionResult = Apollo.SubscriptionResult<GetHintPatientsSubscription>;
export const GetElationPatientsDocument = gql`
    subscription GetElationPatients {
  elation_patients {
    id
    first_name
    last_name
    middle_name
    dob
    sex
    emails
    phones
    address_line1
    address_line2
    city
    state
    zip
    created_date
    last_modified
  }
}
    `;

/**
 * __useGetElationPatientsSubscription__
 *
 * To run a query within a React component, call `useGetElationPatientsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetElationPatientsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetElationPatientsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetElationPatientsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetElationPatientsSubscription, GetElationPatientsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetElationPatientsSubscription, GetElationPatientsSubscriptionVariables>(GetElationPatientsDocument, options);
      }
export type GetElationPatientsSubscriptionHookResult = ReturnType<typeof useGetElationPatientsSubscription>;
export type GetElationPatientsSubscriptionResult = Apollo.SubscriptionResult<GetElationPatientsSubscription>;