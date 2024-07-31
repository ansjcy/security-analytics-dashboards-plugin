/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  CreateDetectorResponse,
  DeleteDetectorResponse,
  Detector,
  SearchDetectorsResponse,
  UpdateDetectorResponse,
} from '../Detector';
import { ServerResponse } from './ServerResponse';
import { GetFieldMappingViewResponse } from "../../server/models/interfaces";

export type MatchAllQuery = { match_all: {} };

export interface IDetectorService {
  createDetector(detector: Detector): Promise<ServerResponse<CreateDetectorResponse>>;
  deleteDetector(detectorId: string): Promise<ServerResponse<DeleteDetectorResponse>>;
  getDetectors(): Promise<ServerResponse<any>>;
  updateDetector(
    detectorId: string,
    detector: Detector
  ): Promise<ServerResponse<UpdateDetectorResponse>>;
}
