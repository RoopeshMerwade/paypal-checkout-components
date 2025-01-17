/* @flow */

import { getHostedButtonsComponent } from "../hosted-buttons";
import type { HostedButtonsComponent } from "../hosted-buttons/types";
import { getButtonsComponent } from "../zoid/buttons";
import {
  getCardFormComponent,
  type CardFormComponent,
} from "../zoid/card-form";
import { getCheckoutComponent, type CheckoutComponent } from "../zoid/checkout";
import type { LazyExport, LazyProtectedExport } from "../types";
import { protectedExport } from "../lib";

export const HostedButtons: LazyExport<HostedButtonsComponent> = {
  __get__: () => getHostedButtonsComponent(),
};

export const Checkout: LazyProtectedExport<CheckoutComponent> = {
  __get__: () => protectedExport(getCheckoutComponent()),
};

export const CardForm: LazyProtectedExport<CardFormComponent> = {
  __get__: () => protectedExport(getCardFormComponent()),
};

export function setup() {
  getButtonsComponent();
  getCheckoutComponent();
}
