// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('is firstNumber a valid number', () => {
    expect(functions.isPhoneNumber('203-393-5930')).toBe(true);
});

test('is secondNumber a valid number', () => {
    expect(functions.isPhoneNumber('(203)-393-5930')).toBe(true);
});

test('is thirdNumber a valid number', () => {
    expect(functions.isPhoneNumber('203-393-593')).toBe(false);
});

test('is secondNumber a valid number', () => {
    expect(functions.isPhoneNumber('021')).toBe(false);
});

test('is firstEmail a valid email', () => {
    expect(functions.isEmail('rayquaza@gmail.com')).toBe(true);
});

test('is secondEmail a valid email', () => {
    expect(functions.isEmail('groudon@hotmail.com')).toBe(true);
});

test('is thirdEmail a valid email', () => {
    expect(functions.isEmail('kyogre@ucsd.orgs')).toBe(false);
});

test('is fourthEmail a valid email', () => {
    expect(functions.isEmail('prof.birch@ucsd.edu')).toBe(false);
});

test('is firstPassword a strong password', () => {
    expect(functions.isStrongPassword('sceptile192')).toBe(true);
});

test('is secondPassword a strong password', () => {
    expect(functions.isStrongPassword('IAMTHEGREATEST')).toBe(true);
});

test('is thirdPassword a strong password', () => {
    expect(functions.isStrongPassword('q')).toBe(false);
});

test('is fourthPassword a strong password', () => {
    expect(functions.isStrongPassword('jfwifjwofjpofjeifojfwfoiwfjewj')).toBe(false);
});

test('is firstDate a valid date', () => {
    expect(functions.isDate('3/20/2000')).toBe(true);
});

test('is secondDate a valid date', () => {
    expect(functions.isDate('12/10/3290')).toBe(true);
});

test('is thirdDate a valid date', () => {
    expect(functions.isDate('03/20/00')).toBe(false);
});

test('is fourthDate a valid date', () => {
    expect(functions.isDate('December 10th, 3290')).toBe(false);
});

test('is firstHexCode a valid color', () => {
    expect(functions.isHexColor('FFFFFF')).toBe(true);
});

test('is secondHexCode a valid color', () => {
    expect(functions.isHexColor('FF0000')).toBe(true);
});

test('is thirdHexCode a valid color', () => {
    expect(functions.isHexColor('2309231')).toBe(false);
});

test('is fourthHexCode a valid color', () => {
    expect(functions.isHexColor('kd')).toBe(false);
});