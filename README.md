# ConTemplate

<!-- <img src="" alt="" width="250">
<sub> image source: []()</sub> -->

## Overview

1. [Description](#description)
2. [Deployment Link](#deployment-link)
3. [Installation](#installation)
4. [Technologies Used](#technologies)
5. [Deliverables](#deliverables)
6. [Planning & Build Process](#planning)
7. [Challenges](#challenges)
8. [Wins](#wins)
9. [Key Learnings & Takeaways](#takeaways)
10. [Future Improvements](#future-improvements)

---

## <a name="description"></a> 1. Description

Application that allows freelance developers to generate and manage custom templates for documents and proposals.

<!-- <img src="" alt="" width="250">
<sub> image source: []()</sub> -->

## <a name="deployment-link"></a> 2. Deployment Link

## <a name="installation"></a> 3. Installation

## <a name="technologies"></a> 4. Technologies Used

<!-- ### Core Technologies

### Key Dependencies

frontend:
- @ng-bootstrap/ng-bootstrap(v19.0.1)
- npm page: https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap
- website: https://ng-bootstrap.github.io/
- github: https://github.com/ng-bootstrap/ng-bootstrap

### UI and Design

- **Fonts**:

- **Icons**:


### Development Tools


### Resources and tutorials -->

## <a name="deliverables"></a> 5. Deliverables

<!--
### MVP

### Potential Extra Features / Stretch Goals

### User Stories -->

## <a name="planning"></a> 6. Planning & Build Process

<!-- bronze plan | silver plan | gold plan

<img src="" alt="wireframe" width="250"> -->

## <a name="challenges"></a> 7. Challenges

- issues while installing @ng-bootstrap/ng-bootstrap (Angular patch drift)

  - caused by having a mix of `20.1.6` and `20.1.7`:
    - `@angular/core` at **20.1.6**
    - `@angular/forms` / later `@angular/compiler-cli` pulling **20.1.7**
  - NPM enforces peer deps, so it refused to install when versions didn’t match.
  - **ng-bootstrap’s peers pulled more Angular packages.**
    `@ng-bootstrap/ng-bootstrap@19` peers on Angular **^20.0.0** and `@angular/localize`.
    NPM initially chose **@angular/localize\@20.1.7**, which requires **@angular/compiler\@20.1.7**, re-triggering the mismatch.
  - **CLI confusion.**
    Trying `ng update @angular/cli@20.1.7` failed because that exact CLI patch wasn’t available (the CLI doesn’t have to match the framework patch)

- fix:
  - **Pinned every Angular framework package** to the **same patch (20.1.6)**: `core`, `common`, `compiler`, `forms`, `router`, `platform-*`, **and** `compiler-cli`.
  - **Added `@angular/localize@20.1.6`** explicitly so NPM wouldn’t pull `20.1.7`.
  - Reinstalled clean (after removing node_modules and package-lock.json) and then installed **`@ng-bootstrap/ng-bootstrap@19`**.

## <a name="wins"></a> 8. Wins

## <a name="takeaways"></a> 9. Key Learnings & Takeaways

- To avoid peer-dep mismatches, keep all Angular framework packages (incl. `compiler-cli` and `localize`) on the same patch
  - also: make use of `--save-exact` (or remove `^` in `package.json`) to stop silent patch bumps

## <a name="future-improvements"></a> 10. Future Improvements

<!--
rails: usually classic mvc file structure i.e. component driven approach (controller, models, views)

angular: feature-based approach -> proposals, docs, homepage etc to organise code




---------------------------------------------------------------------------------------------
BUILD PROCESS
---------------------------------------------------------------------------------------------
13/08/2025

- generate Angular Frontend using [Angular CLI](https://github.com/angular/angular-cli)

```zsh
ng new angular frontend
```


15/08/2025
- add homepage component, using angular cli

```zsh
ng g c homepage
```

- add route for homepage
- create github repo and link to local repo
- push project up to github

- add documents component using angular cli


---------------------------------------------------------------------------------------------
resources
---------------------------------------------------------------------------------------------

youtube
- [Master Angular in 90 Minutes with This Crash Course](https://www.youtube.com/watch?v=oUmVFHlwZsI&t=110s) by [Code with Ahsan](https://www.youtube.com/@CodeWithAhsan)

udemy
- [React JS + Angular + Rails 5 Bootcamp](https://www.udemy.com/course/angular-on-rails-course/) by [Jordan Hudgens](https://www.udemy.com/user/jordanhudgens/)
- [Angular - The Complete Guide (2025 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2/) by [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/)



 -->
