# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [1.0.23] - 2025-07-24

Improvements made to error handling in the response to identify the original error instead of returning a generic message

## [1.0.22] - 2025-05-02

Update dependencies of the package.json

## [1.0.21] - 2025-04-09

Added support for string instead of objects responses when error occurs

## [1.0.20] - 2024-02-26

Added spread of properties to axios request to support missing properties on previos releases

## [1.0.16] - 2023-01-23

### Added

The options parameter is added, this will be an array with all the options that we want to obtain from the request

## [1.0.15] - 2023-01-18

### Added

Array of errors in error object

## [1.0.14] - 2022-05-20

### Fixes

- Missing merge

## [1.0.13] - 2022-05-20

### Fixes

- Get status from response

## [1.0.12] - 2022-05-20

### Fixes

- the throw error is modified when a request gives an error, since it did not return the status or the statusCode

## [1.0.8] - 2022-01-19

### Added

- throwError param was added for request that need throws the exception when request fails
- Sequelize was added as a dependency for projects without that dependency, because is required for request trackings

## [0.0.1] - 2021-03-08

### Added

- added request-tracking file for creating request http promise base
- added unit test for axios http crud and modified packajson.
- refactor un unit test requestSOIN
- added requestTracking with params retries and log
- refactor in unit test and added sequlize sqlite for testing the class
- added test for model and the rest of use cases, also adjusted the classes bases
- refactor, clean code up
- saved changes
- added limit param to scheduler cron
- finished request, requestTracking and function for attaching to cronjobs/scheduler
- change comment in code
- added readme and change teh comment inside the libraries
- update readme, removed the SOIN word in any text in readme file
- refactor, remove SOIN word
- added adpater, clean code up and added adapter for handdle errors
- added chengelog
- config codecove, coverage reports with Jest and refactor
- clean code up
- last changes
- added template for covering report from jest in readme file
- update readme file with report from jest coverage
- added more Unit Tests
- change in badges

[unreleased]: https://github.com/SoinLabs/request/compare/v1.1.0...HEAD
[0.0.1]: https://github.com/SoinLabs/request/releases/tag/v0.0.1
