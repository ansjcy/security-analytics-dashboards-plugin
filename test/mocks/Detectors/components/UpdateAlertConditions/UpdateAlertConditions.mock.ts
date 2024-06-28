/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import services from '../../../services';
import detectorHitMock from '../../containers/Detectors/DetectorHit.mock';
import notificationsStartMock from '../../../services/notifications/NotificationsStart.mock';
import UpdateAlertConditions from '../../../../../public/pages/Detectors/components/UpdateAlertConditions/UpdateAlertConditions';
import { ROUTES } from '../../../../../public/utils/constants';

const { notificationsService, detectorsService, opensearchService, ruleService } = services;

export default ({
  detectorHit: detectorHitMock,
  detectorService: detectorsService,
  opensearchService: opensearchService,
  ruleService: ruleService,
  notificationsService: notificationsService,
  notifications: notificationsStartMock,
  location: {
    pathname: `${ROUTES.EDIT_DETECTOR_ALERT_TRIGGERS}/${detectorHitMock._id}`,
    state: {
      detectorHit: detectorHitMock,
    },
  },
} as unknown) as typeof UpdateAlertConditions;
