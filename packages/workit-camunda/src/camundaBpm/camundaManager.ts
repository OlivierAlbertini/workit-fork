/*
 * Copyright (c) 2021 Ville de Montreal. All rights reserved.
 * Licensed under the MIT license.
 * See LICENSE file in the project root for full license information.
 */

import { IWorkflowClient } from '@villedemontreal/workit-types';
import { inject, injectable, named } from 'inversify';
import { ClientManager } from '../camunda-n-mq/clientManager';
import { SERVICE_IDENTIFIER } from '../config/constants/identifiers';
import { TAG } from '../config/constants/tag';

@injectable()
export class CamundaManager extends ClientManager<IWorkflowClient> {
  constructor(@inject(SERVICE_IDENTIFIER.camunda_client) @named(TAG.camundaBpm) client: IWorkflowClient) {
    super(client);
  }
}
