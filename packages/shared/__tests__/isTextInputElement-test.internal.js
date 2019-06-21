/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';
import isTextInputElement from 'shared/isTextInputElement';

function createInputElement(inputType) {
  let element = document.createElement('input');
  element.type = inputType;
  return element;
};

describe('isTextInputElement', () => {

  it("returns false if no element is passed to it", () => {
    const evaluation = isTextInputElement();
    expect(evaluation).toBe(false);
  });

  it("returns false for an HTMLElement with a falsey nodeName;", () => {
    const element = document.createElement(null);
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(false);
  });

  it("returns true for an HTMLElement with nodeName of 'textarea'", () => {
    const element = document.createElement('textarea');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });

  it("ignores caps for an HTMLElement's nodeName", () => {
    const element = document.createElement('TEXTAREA');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });

  it("returns false for an HTMLElement of 'input' where type is not supported", () => {
    const element = document.createElement('input');
    element.type = "not supported";
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(false);
  });

  it("returns true for an HTMLElement of 'input' where type is text", () => {
    const element = createInputElement('text');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });

  it("returns true for an HTMLElement of 'input' where type is number", () => {
    const element = createInputElement('number');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });

  it("returns true for an HTMLElement of 'input' where type is range", () => {
    const element = createInputElement('range');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });

  it("returns true for an HTMLElement of 'input' where type is color", () => {
    const element = createInputElement('color');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });

  it("returns true for an HTMLElement of 'input' where type is date", () => {
    const element = createInputElement('date');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });

  it("returns true for an HTMLElement of 'input' where type is datetime", () => {
    const element = createInputElement('datetime');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });

  it("returns true for an HTMLElement of 'input' where type is 'datetime-local'", () => {
    const element = createInputElement('datetime-local');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });

  it("returns true for an HTMLElement of 'input' where type is email", () => {
    const element = createInputElement('email');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });

  it("returns true for an HTMLElement of 'input' where type is month", () => {
    const element = createInputElement('month');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });

  it("returns true for an HTMLElement of 'input' where type is password", () => {
    const element = createInputElement('password');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });

  it("returns true for an HTMLElement of 'input' where type is search", () => {
    const element = createInputElement('search');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });

  it("returns true for an HTMLElement of 'input' where type is tel", () => {
    const element = createInputElement('tel');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });

  it("returns true for an HTMLElement of 'input' where type is time", () => {
    const element = createInputElement('time');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });

  it("returns true for an HTMLElement of 'input' where type is url", () => {
    const element = createInputElement('url');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });

  it("returns true for an HTMLElement with NodeName input and type week", () => {
    const element = createInputElement('week');
    const evaluation = isTextInputElement(element);
    expect(evaluation).toBe(true);
  });
});
