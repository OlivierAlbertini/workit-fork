/*
 * Copyright (c) 2024 Ville de Montreal. All rights reserved.
 * Licensed under the MIT license.
 * See LICENSE file in the project root for full license information.
 */
export interface IAwsConfig {
  region: string;
  credentials: IAwsCredentials;
}

export interface IAwsCredentials {
  accessKeyId: string;
  secretAccessKey: string;
}
