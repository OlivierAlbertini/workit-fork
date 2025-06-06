/*
 * Copyright (c) 2025 Ville de Montreal. All rights reserved.
 * Licensed under the MIT license.
 * See LICENSE file in the project root for full license information.
 */

import { Context } from '@opentelemetry/api';
import { IMessageBase } from '../core/message';

/**
 * Utility for tracer
 */
export interface ITracerPropagator {
  /**
   * Used for extracting traceId from message
   *
   * @param {IMessageBase} message the message coming from the server
   */
  extractFromMessage(message: IMessageBase): Context | undefined;
}
