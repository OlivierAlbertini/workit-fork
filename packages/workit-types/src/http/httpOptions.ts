/*
 * Copyright (c) 2025 Ville de Montreal. All rights reserved.
 * Licensed under the MIT license.
 * See LICENSE file in the project root for full license information.
 */

import { IHeaders } from './headers';

export interface IHttpOptions {
  headers: IHeaders;
  params: Record<string, unknown>;
}
