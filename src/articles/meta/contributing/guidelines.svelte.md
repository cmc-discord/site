---
tags:
- meta

authors: []

title: Guidelines
summary: Rules and tips to keep in mind when contributing to the project.
---

When working on and submitting a contribution, you must read this section in full and follow its guidelines.
Failure to do so may result in the rejection of your contributions,
and **repeated violations may result in you being banned from our GitHub organisation.**

<!--more-->

# General Conduct

When interacting with others on GitHub or any of our other spaces, you must follow our rules.
While we haven't yet written a formal copy of these, the following is a rough summary:

1. Follow the rules of whatever platform you're using.
2. Try to speak English, and use translation tools if you need them.
3. Interact appropriately, and be conscious of the people around you.
4. Respect others, regardless of their backgrounds and identities.
5. Collaborate with your peers, and don't step on their feet by duplicating their work.
6. Don't suddenly submit sweeping changes, and create an issue (if one doesn't exist) before you start working.

These rules also apply when representing this project (or the Community Management Community) in any space.
We may also apply them when we observe behaviour outside our spaces that we feel may warrant excluding you from our
spaces, for our safety or the safety of our users and members.

We plan on formalising these rules with a proper Code of Conduct (and a deeper level of detail) later.

# Prohibited Tools

On [the Tooling page](/a/meta/contributing/tooling), we list a set of tools with
[restricted usage](/a/meta/contributing/tooling#restricted-tools), and a set of tools we
[don't allow contributors to use at all](/a/meta/contributing/tooling#prohibited-tools).

Please make sure you read the lists mentioned above, as we'll expect you to understand them before you submit any
work.

# Writing Style

As this site is meant to be a comprehensive resource for anyone involved with running a community space, we feel
it is important to set some standards when it comes to how our contributors write content:

- **Use proper English.**

  We expect that all written content uses proper English spelling and grammar.
  However, we understand that many potential contributors may not have a strong grasp of English.

  If you feel that your command of the English language doesn't meet a level you're happy with, we encourage you to
  use the [recommended tools](/a/meta/contributing/tooling#recommended-tools), and to reach out if you're struggling
  and need help.

  If you decide to submit your contribution without running a grammar tool over it, we'll be more than happy to help
  you with your submission.

- **Use a consistent dialect.**

  We will accept submissions written using either American English or British English.
  However, we believe that consistency is important, and we expect submissions to use one or the other, instead of
  mixing them.

  We make an exception to this rule if the difference between dialects is relevant to the content of your submission.

- **Use a semiformal tone, and avoid using slang, slurs or swear words out of context.**

  Your content must be clear and relatively unambiguous, and it must be accessible to people dealing with traumas and
  oppression.
  It must also be accessible to people that don't have a native-level understanding of English, and semiformal writing
  is sometimes easier for translation tools to process.

  You may use slurs and other objectionable terms as examples within relevant contexts, as long as that context is
  educational rather than for emphasis.

  We make an exception to this rule for third-party content linked to by your submissions.

- **Provide text instead of media.**

  While multimedia may be a useful tool of engagement for non-disabled people, it may not be accessible to others for
  a variety of reasons.
  Because of this, we require that you provide a textual description for any embedded images, and we ask that you
  provide a link to a textual version of any videos or other types of multimedia where possible.

  If audio files make up part of your submission, you should also include a transcription for each file.
  If you don't have a transcription tool, please see [our recommended tooling](/a/meta/contributing/tooling).

# Code Style

Generally speaking, you should follow the code style already established by code that's already part of the project.
We encourage you to use linters and formatters, and have included configuration files for [ESLint](https://eslint.org/)
and [Prettier](https://prettier.io/).

We also provide a `.editorconfig` file, for editors that support it.

All code styles are opinionated, and we've made a few decisions based on our own experiences:

- **Use tabs instead of spaces where possible and realistic.**

  This makes your code more accessible for blind and visually impaired developers, including those using huge fonts
  and Braille displays — especially where editors don't include great accessibility tools.

- **Don't play code golf.**

  Instead, use longer forms of statements where they're more readable than the shorter versions, and provide plenty
  of blank lines between different types of statements.

- **Alphabetise where possible.**

  Sorting lists alphabetically often makes things easier to read.
  It is also important to alphabetise lists when creating written, non-code content, as it shows readers that you
  didn't order the list by your (or our) preference.

- **Consistent code is better than perfect code.**

  It is important to be aware of the limitations of your tooling and programming languages.

  It will sometimes be impossible to write code that keeps your linters happy.
  In those situations, it is more important to focus on functionality and readability, rather than bending over
  backwards to meet what the linters demand of you.

```ts
    import fs from "fs";
    import process from "process";
    import YAML from "yaml";

    // Empty line above, the above imports are builtins, but the next import uses a directory alias.
    import { trimString } from "$lib/utils";

    // Empty line above, the above imports uses a directory alias, but the next import uses a relative path.
    import type {
        // You should sort sections alphabetically where possible, as it makes things easier to read.
        ArticleModule,

        // Empty line above, separating related imports from unrelated imports.
        NavigationItem,
        NavigationList,
        NavigationListWithPrefix,
        NavigationRoot,

        // Empty line above, separating related imports from unrelated imports.
        RichNavigationItem,
        RichNavigationList,
        RichNavigationListWithPrefix,

        // Empty line above, separating related imports from unrelated imports.
        TagInfo,
    } from "./data";

    // Empty line above, you should always separate imports from the rest of the code.
    export function myFunction() {
        let x = "one";
        let y = "two";

        // Empty line above, "let" and "const" are different types of variable declaration.
        const z = [x, y];

        // Empty line above, "for" is a block statement and you should separate it from other statements.
        for (const item of z) {
            console.log("Iterating:", {
              item
            })
        }

        // Empty line above, "return" is a new statement, and you should separate it from the block statement above.
        return z.concat([x + y])
    }
```
