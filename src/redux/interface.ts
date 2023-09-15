export interface Member {
  memberId: number,
  email: string,
  name: string,
  nickname: string,
  gender?: string,
  birthdate?: string,
  phone?: string,
  introduce?: string,
  temperature: number
}

export interface Comment {
  commentId: number,
  memberId: number,
  studyId: number,
  comment: string,
  dateCreated: string,
  commentTag? : number
}

export interface Board {
  boardId: number,
  memberId: number,
  studyId: number,
  title: string,
  type: string,
  content: string,
  s3Url?: string,
  studyDate?: string,
  studyLocation?: string,
  dateCreated: string,
}

export interface Study {
  studyId: number,
  categoryId: number,
  memberId: number,
  title?: string,
  studyType?: string | "ON" | "OFF",
  numberOfMembers?: number,
  regionCode?: number,
  studyInfo?: string,
  studyStatus?: string | "CURR" | "COMP",
}

export interface Challenge {
  challengeId: number,
  studyId: number,
  title?: string,
  goal?: string,
  startDate?: string,
  endDate?: string,
  challengeFee?: number,
  checkFormat?: string,
  challengeState?: string,
  dateCreated?: string,
}

export interface Point {
  pointId: number,
  memberId: number,
  pointTotal?: number,
  pointCharge?: number,
  dateCreated: string,
}

export interface Bookmark {
  bookmarkId: number,
  memberId: number,
  studyId: number,
  dateCreated: string,
}

export interface MemberStudy {
  memberStudyId: number,
  memberId: number,
  studyId: number,
  dateCreated: string,
  dateOkay?: string,
}

export interface MemberChallenge {
  key: number,
  memberId: number,
  challengeId: number,
  dateCreated: string,
}

export interface ChallengeLog {
  chalLogId: number,
  key: number,
  dateCreated: string,
  s3Url?: string,
}

export interface Notificatioins {
  notificationId: number,
  memberId: number,
  fcmToken?: string
}

export interface Region {
  regionCode: number,
  parentId: number,
  gu?: string,
  doung?: string,
}

export interface Category {
  categoryId: number,
  parentId: number,
  parent?: string,
  child?: string,
}