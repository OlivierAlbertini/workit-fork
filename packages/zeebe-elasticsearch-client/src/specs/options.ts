/*
 * Copyright (c) 2023 Ville de Montreal. All rights reserved.
 * Licensed under the MIT license.
 * See LICENSE file in the project root for full license information.
 */
import { IHeaders } from './headers';

export interface IOptions {
  headers: IHeaders;
  params: Record<string, unknown>;
}
