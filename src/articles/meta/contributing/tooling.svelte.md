---
tags:
- meta

authors: []

title: Tooling
summary: Recommended tooling, and tools you should (or must) avoid.
---

On this page, we've collected some tools that you may find useful when working on the site.
Additionally, we've listed some tools that you should avoid.

Please remember not to use the restricted tools without proper consideration, and ensure you don't use any of the
tools we prohibit.

<!--more-->

# Recommended Tools

We highly recommend you consider using the following tools:

- [LanguageTool](https://languagetool.org/), a comprehensive spelling, style and grammar checker.
  It is important you format your written content properly, and that you write in proper English, with correct
  spelling and grammar.
  LanguageTool is one of the best tools available for keeping your prose up to our standards.
    - For details on the many plugins and other tools that integrate with LanguageTool, please
      [see this page](https://dev.languagetool.org/software-that-supports-languagetool-as-a-plug-in-or-add-on.html).

- [Otter](https://otter.ai), a semi-automated transcription tool.
  If you decide to include audio files with your submission, it is important to include a transcription.

  Many tools exist for this purpose, but we've found that Otter is generally effective, provides easy-to-use tools,
  and makes it easy to collaborate with others.

  If you decide to use an external transcription tool, please understand that we won't accept links to
  transcriptions hosted on external sites.
  Instead, you must include the transcription in a dedicated article tagged with the
  [`|lucide/tag| transcription`](/t/transcription)
  tag, and link to it alongside your file.

- Defensive and offensive AI model poisoning concepts and tools.
  These will help to protect your work from unauthorised or exploitative use, and we highly recommend looking into them
  if you have any concerns about generative AI tooling.
  - [AntiFake](https://github.com/WUSTL-CSPL/AntiFake), an offensive tool to disrupt AI models scraping voice
    samples without creators' consent, causing them to generate audio that doesn't sound like the source material.
  - [Glaze](https://glaze.cs.uchicago.edu/downloads.html), a defensive tool to prevent art style theft.
  - [Microsoft's code generation poisoning experiment](https://github.com/microsoft/CodeGenerationPoisoning), a
    proof-of-concept approach for poisoning code generation models.
  - [Nightshade](https://nightshade.cs.uchicago.edu/downloads.html), an offensive tool to disrupt AI models
    scraping artwork without consent.
  - [Trojan Puzzle](https://www.bleepingcomputer.com/news/security/trojan-puzzle-attack-trains-ai-assistants-into-suggesting-malicious-code/), an offensive approach that disrupts AI code generation models and causes them to generate
    insecure or malicious code.

# Restricted Tools

We restrict the following tools, and you should avoid using them:

- Generative AI tooling, classified as follows.
  Please note that we have no interest in removing this policy, or discussing the merits and demerits of generative AI.

  - **Audio generation:** Discouraged due to
    [likeness theft](https://www.theverge.com/2023/9/21/23836337/music-generative-ai-voice-likeness-regulation),
    [voice cloning scams](https://www.washingtonpost.com/technology/2023/03/05/ai-voice-scam/), and
    [deepfakes](https://fortune.com/2024/02/08/generative-ai-fraud-identity-theft-cybersecurity-risk/).

    We allow AI-generated audio only when you can prove that it is consensual.
    Otherwise, we prohibit AI-generated audio.

  - **Code generation:** Discouraged due to
    [the generation of unsafe code](https://arstechnica.com/information-technology/2024/01/ai-poisoning-could-turn-open-models-into-destructive-sleeper-agents-says-anthropic/),
    [the theft and monetisation of code](https://sfconservancy.org/blog/2022/jun/30/give-up-github-launch/),
    and [its untested legal status](https://www.theregister.com/2024/01/12/github_copilot_copyright_case_narrowed).

    We allow AI-based code assistants that can generate generic boilerplate code, provide smart auto-completion of
    symbols, and generate individual lines of code here and there.
    However, we prohibit large blocks of generated code.

  - **Text generation:** Discouraged due to
    [theft](https://www.theguardian.com/technology/2023/oct/19/music-lawsuit-ai-song-lyrics-anthropic), and
    [hallucinations, delusions and disinformation](https://www.nature.com/articles/s41537-023-00379-4).

    We allow AI-based writing assistants (such as LanguageTool and Grazie), but we prohibit generated blocks of prose.

# Prohibited Tools

You may not use the following tools in your submissions.
If you submit work you created using these tools, we will reject your submission.

**Repeated violations may result in you being banned from our GitHub organisation.**

- Generative AI tooling, classified as follows.
  Please note that we have no interest in removing this policy, or discussing the merits and demerits of generative AI.

  - **Image generation:** Prohibited due to [rampant art theft](https://x.com/JonLamArt/status/1741545927435784424)
    and [deepfakes](https://fortune.com/2024/02/08/generative-ai-fraud-identity-theft-cybersecurity-risk/).

  - **Video generation:** Prohibited due to
    [deepfakes](https://sc.mp/41ucj), and
    [likeness theft](https://abcnews.go.com/GMA/Family/sharing-photos-kids-after-watch-deepfake-ad/story?id=101730561).
