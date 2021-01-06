import {
  UrlState,
  UrlTableConfig,
  UrlTableFilterConfig,
  UrlType,
} from '../reducers/types'

/* User actions */

export enum UserAction {
  CREATE_URL_SUCCESS = 'CREATE_URL_SUCCESS',
  GET_URLS_FOR_USER_SUCCESS = 'GET_URLS_FOR_USER_SUCCESS',
  OPEN_CREATE_URL_MODAL = 'OPEN_CREATE_URL_MODAL',
  CLOSE_CREATE_URL_MODAL = 'CLOSE_CREATE_URL_MODAL',
  SET_SHORT_URL = 'SET_SHORT_URL',
  SET_LONG_URL = 'SET_LONG_URL',
  SET_EDITED_LONG_URL = 'SET_EDITED_LONG_URL',
  SET_RANDOM_SHORT_URL = 'SET_RANDOM_SHORT_URL',
  RESET_USER_STATE = 'RESET_USER_STATE',
  TOGGLE_URL_STATE_SUCCESS = 'TOGGLE_URL_STATE_SUCCESS',
  SET_URL_TABLE_CONFIG = 'SET_URL_TABLE_CONFIG',
  SET_URL_FILTER = 'SET_URL_FILTER',
  UPDATE_URL_COUNT = 'UPDATE_URL_COUNT',
  IS_FETCHING_URLS = 'IS_FETCHING_URLS',
  WIPE_USER_STATE = 'WIPE_USER_STATE',
  SET_IS_UPLOADING = 'SET_IS_UPLOADING',
  SET_UPLOAD_FILE_ERROR = 'SET_UPLOAD_FILE_ERROR',
  SET_CREATE_SHORT_LINK_ERROR = 'SET_CREATE_SHORT_LINK_ERROR',
  SET_LAST_CREATED_LINK = 'SET_LAST_CREATED_LINK',
  SET_EDITED_CONTACT_EMAIL = 'SET_EDITED_CONTACT_EMAIL',
  SET_EDITED_DESCRIPTION = 'SET_EDITED_DESCRIPTION',
  SET_USER_MESSAGE = 'SET_USER_MESSAGE',
  SET_USER_ANNOUNCEMENT = 'SET_USER_ANNOUNCEMENT',
  SET_URL_UPLOAD_STATE = 'SET_URL_UPLOAD_STATE',
  SET_FILE_UPLOAD_STATE = 'SET_FILE_UPLOAD_STATE',
}

export type SetUrlUploadStateAction = {
  type: UserAction.SET_URL_UPLOAD_STATE
  payload: boolean
}

export type SetFileUploadStateAction = {
  type: UserAction.SET_FILE_UPLOAD_STATE
  payload: boolean
}

export type SetUserMessageAction = {
  type: UserAction.SET_USER_MESSAGE
  payload: string
}

export type SetUserAnnouncementAction = {
  type: UserAction.SET_USER_ANNOUNCEMENT
  payload: {
    message: string | undefined
    title: string | undefined
    subtitle: string | undefined
    url: string | undefined
    image: string | undefined
  }
}

export type SetEditedContactEmailAction = {
  type: UserAction.SET_EDITED_CONTACT_EMAIL
  payload: {
    shortUrl: string
    editedContactEmail: string
  }
}

export type SetEditedDescriptionAction = {
  type: UserAction.SET_EDITED_DESCRIPTION
  payload: {
    shortUrl: string
    editedDescription: string
  }
}

export type SetLastCreatedLinkAction = {
  type: UserAction.SET_LAST_CREATED_LINK
  payload: string
}

export type WipeUserStateAction = {
  type: UserAction.WIPE_USER_STATE
}

export type IsFetchingUrlsAction = {
  type: UserAction.IS_FETCHING_URLS
  payload: boolean
}

export type CreateUrlSuccessAction = {
  type: UserAction.CREATE_URL_SUCCESS
}

export type GetUrlsForUserSuccessAction = {
  type: UserAction.GET_URLS_FOR_USER_SUCCESS
  payload: Array<UrlType>
}

export type OpenCreateUrlModalAction = {
  type: UserAction.OPEN_CREATE_URL_MODAL
}

export type CloseCreateUrlModalAction = {
  type: UserAction.CLOSE_CREATE_URL_MODAL
}

export type SetShortUrlAction = {
  type: UserAction.SET_SHORT_URL
  payload: string
}

export type SetLongUrlAction = {
  type: UserAction.SET_LONG_URL
  payload: string
}

export type SetEditedLongUrlAction = {
  type: UserAction.SET_EDITED_LONG_URL
  payload: {
    shortUrl: string
    editedLongUrl: string
  }
}

export type SetRandomShortUrlAction = {
  type: UserAction.SET_RANDOM_SHORT_URL
  payload: string
}

export type ResetUserStateAction = {
  type: UserAction.RESET_USER_STATE
}

export type ToggleUrlStateSuccessAction = {
  type: UserAction.TOGGLE_URL_STATE_SUCCESS
  payload: {
    shortUrl: string
    toState: UrlState
  }
}

export type SetUrlTableConfigAction = {
  type: UserAction.SET_URL_TABLE_CONFIG
  payload: UrlTableConfig
}

export type UpdateUrlCountAction = {
  type: UserAction.UPDATE_URL_COUNT
  payload: number
}

export type SetIsUploadingAction = {
  type: UserAction.SET_IS_UPLOADING
  payload: boolean
}

export type SetUploadFileErrorAction = {
  type: UserAction.SET_UPLOAD_FILE_ERROR
  payload: string
}

export type SetCreateShortLinkErrorAction = {
  type: UserAction.SET_CREATE_SHORT_LINK_ERROR
  payload: string
}

export type SetUrlFilterAction = {
  type: UserAction.SET_URL_FILTER
  payload: UrlTableFilterConfig
}

export type UserActionType =
  | UpdateUrlCountAction
  | SetUrlTableConfigAction
  | ToggleUrlStateSuccessAction
  | ResetUserStateAction
  | SetRandomShortUrlAction
  | SetEditedLongUrlAction
  | SetLongUrlAction
  | SetShortUrlAction
  | CloseCreateUrlModalAction
  | OpenCreateUrlModalAction
  | GetUrlsForUserSuccessAction
  | CreateUrlSuccessAction
  | WipeUserStateAction
  | IsFetchingUrlsAction
  | SetIsUploadingAction
  | IsFetchingUrlsAction
  | SetCreateShortLinkErrorAction
  | SetUploadFileErrorAction
  | SetLastCreatedLinkAction
  | SetUrlFilterAction
  | SetEditedContactEmailAction
  | SetEditedDescriptionAction
  | SetUserMessageAction
  | SetUserAnnouncementAction
  | SetUrlUploadStateAction
  | SetFileUploadStateAction
