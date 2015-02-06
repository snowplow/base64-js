/*
 * JavaScript tracker core for Snowplow: tests/base64.js
 * 
 * Copyright (c) 2014 Snowplow Analytics Ltd. All rights reserved.
 *
 * This program is licensed to you under the Apache License Version 2.0,
 * and you may not use this file except in compliance with the Apache License Version 2.0.
 * You may obtain a copy of the Apache License Version 2.0 at http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the Apache License Version 2.0 is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the Apache License Version 2.0 for the specific language governing permissions and limitations there under.
 */
var assert = require('assert');
var base64 = require('./index');

describe('base64-js', function () {

	describe('#encodeBase64', function () {
		it('should encode an ASCII string', function () {
			assert.equal(base64.encodeBase64('mystring'), 'bXlzdHJpbmc=');
		});

		it('should encode a string containing TM, Registered Trademark, and Chinese characters', function () {
			assert.equal(base64.encodeBase64('™®字'), '4oSiwq7lrZc=');
		})
	});

	describe('#encodeBase64UrlSafe', function () {
		it('should encode a string using only URL-safe characters', function () {
			assert.equal(base64.encodeBase64UrlSafe('mystring'), 'bXlzdHJpbmc');
		});
	});
});
