import {AxiosInstance} from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {mockAuth} from '../../app/modules/auth'
import {mockTop} from "../../app/modules/top-page/__mocks__/mockTop";
import {mockRecord} from "../../app/modules/record-page";
import {mockColumn} from "../../app/modules/column-page";

export default function mockAxios(axios: AxiosInstance) {
  const mock = new MockAdapter(axios, {delayResponse: 300})
  mockAuth(mock)
  mockTop(mock)
  mockRecord(mock)
  mockColumn(mock)
  return mock
}
