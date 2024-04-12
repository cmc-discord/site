---
tags:
- meta

authors: []

title: Submitting Work
summary: Instructions on how to submit your contributions.
---

<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs/index.js";
</script>

We've come up with several approaches to submitting contributions, organised by expected technical proficiency, and
the type of contributor.

<!--more-->

# Writers

[`|icon: lucide/book-check| Guidelines`](/a/meta/contributing/guidelines)

We've come up with several ways to contribute articles, with varying levels of technical difficulty in mind.
We're still working on making this easier, so you can expect that we'll update this section soon!

<Tabs.Root value="local">
<Tabs.List>
    <Tabs.Trigger value="local">Local</Tabs.Trigger>
    <Tabs.Trigger value="web-vsc">Web (VSC)</Tabs.Trigger>
    <Tabs.Trigger value="web-basic">Web (Basic)</Tabs.Trigger>
    <Tabs.Trigger value="discord">Discord</Tabs.Trigger>
</Tabs.List>

<div
    class="rounded-md bg-secondary" style="height: 21em; overflow: auto; margin-top: 1em; padding-left: 1em; padding-right: 1em;"
>
<Tabs.Content value="local">

This is **the most complex approach**.
We only recommend it if you have **lots of experience working with computers.**

1. Install Git by [following these instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
2. Create a GitHub account if you haven't already.
3. Create an SSH key and add it to your GitHub account by
   [following these instructions](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
4. Go to [the site repository](https://github.com/cmc-discord/site).
5. Click/tap the **Fork** button at the top-right of the page.
6. Select an owner and repository name if the default settings aren't satisfactory.
7. Click/tap the **Code** button at the top-right of your fork's page.
8. Ensure you have the **SSH** tab selected, and copy the provided URL.
9. Use Git to clone your repository by opening a terminal and
   [using the `git clone` command](https://github.com/git-guides/git-clone).
10. Use a text editor (such as [VS Code](https://code.visualstudio.com/)) to create your article file in
    `/src/articles` as described earlier.
11. Work on your article, using the structure described earlier.
12. Use Git to commit your changes by opening a terminal and
    [using the `git commit` command](https://github.com/git-guides/git-commit).
13. Use Git to push your changes to GitHub by opening a terminal and
    [using the `git push` command](https://github.com/git-guides/git-push).
14. On GitHub, navigate to your fork, and click/tap the **Compare &amp; pull request** button.
15. When prompted, provide a title and description for your pull request.
16. Click/tap the **Create Pull Request** button.
    If your article is not ready for review yet, click/tap the **Create Draft Pull Request** button instead.
17. A Cloudflare bot should leave a comment on your Pull Request with a link you can click to preview the site with
    your changes.
18. Continue working on your article as needed.
    Your Pull Request will automatically update as you push commits to your fork.
19. Keep an eye on your Pull Request, and address any comments and reviews people make.
20. When everyone's happy with your article, we'll merge your Pull Request.
    It will be available on the site shortly after.

</Tabs.Content>

<Tabs.Content value="web-vsc">

Instead of working directly on your computer, GitHub provides a way to **use the VS Code editor in your browser**.
This is **less complex than the previous approach**, but **still requires intermediate computer experience.**

1. Create a GitHub account if you haven't already.
2. Go to [the site repository](https://github.com/cmc-discord/site).
3. Click/tap the **Fork** button at the top-right of the page.
4. Select an owner and repository name if the default settings aren't satisfactory.
5. Once your fork is ready, press `.` on your keyboard, or edit the URL in your address bar, replacing `github.com`
   with `github.dev`.
6. Install the recommended plugins if the editor prompts you to do so.
7. Under the **Explorer** tab on the left, navigate to `src/articles`.
8. Right-click the `articles` folder, and select **New File...**.
9. Name your article file and hit `Enter`.
10. Work on your article, using the structure described earlier.
11. Under the **Source Control** tab on the left, type a commit message and hit `Ctrl+Enter`.
12. On GitHub, navigate to your fork and Click/tap the **Create Pull Request** button.
    If your article is not ready for review yet, click/tap the **Create Draft Pull Request** button instead.
13. A Cloudflare bot should leave a comment on your Pull Request with a link you can click to preview the site with
    your changes.
14. Continue working on your article as needed.
    Your Pull Request will automatically update as you push commits to your fork.
15. Keep an eye on your Pull Request, and address any comments and reviews people make.
16. When everyone's happy with your article, we'll merge your Pull Request.
    It will be available on the site shortly after.

</Tabs.Content>

<Tabs.Content value="web-basic">

This method allows you to **edit your article directly on GitHub**.
However, **the basic editor lacks many useful features,** and **we don't recommend this approach unless it is your only
option.**

1. Create a GitHub account if you haven't already.
2. Go to [the site repository](https://github.com/cmc-discord/site).
3. Click/tap the **Fork** button at the top-right of the page.
4. Select an owner and repository name if the default settings aren't satisfactory.
5. Once your fork is ready, navigate to `/src/articles`.
6. Click/tap the **Add file** button at the top-right of the page, and select **Create new file**.
7. Name your file as described in the previous section.
8. Work on your article, using the structure described in the next section.
9. Click/tap on the **Commit changes...** button.
10. In the popup that appears, click/tap on the **Commit changes** button.
11. Navigate back to your fork's main page and Click/tap the **Create Pull Request** button.
    If your article is not ready for review yet, click/tap the **Create Draft Pull Request** button instead.
12. A Cloudflare bot should leave a comment on your Pull Request with a link you can click to preview the site with
    your changes.
13. Continue working on your article as needed, by navigating to the article file and clicking/tapping on the button
    that looks like this: `|icon: tabler/pencil|`

    Your Pull Request will automatically update as you push commits to your fork.
14. Keep an eye on your Pull Request, and address any comments and reviews people make.
15. When everyone's happy with your article, we'll merge your Pull Request.
    It will be available on the site shortly after.

</Tabs.Content>

<Tabs.Content value="discord">

If you'd prefer to avoid using Git or GitHub directly, **you may submit your articles to us on Discord.**
However, as of this writing, **we only provide this option to Community Management Community members.**
Information on how you join us will be provided later.

1. Create a post in the **#article-submissions** forum channel, being sure to follow the posting guidelines.
2. Feel free to use your post to gather research and chat with other members about your article.
3. At some point, we'll assign a member of staff to your submission.
   They will review your submission and help you work on it, providing feedback and support.
4. When your article is ready to be contributed, your assigned staff member will create a Pull Request on your behalf.
   You will be responsible for monitoring this Pull Request for comments and reviews.
5. You may submit updates to your Pull Request via your assigned staff member.
6. When everyone's happy with your article, we'll merge the Pull Request.
   It will be available on the site shortly after.

</Tabs.Content>
</div>
</Tabs.Root>

# Developers

[`|icon: lucide/book-check| Guidelines`](/a/meta/contributing/guidelines)

We recommend the following workflow to anyone that wishes to contribute as a developer:

1. Start by forking [the site's repository](https://github.com/cmc-discord/site).
2. Browse the [issues](https://github.com/cmc-discord/site/issues) and
   [Pull Requests](https://github.com/cmc-discord/site/pulls) to ensure you aren't duplicating someone else's work.
3. If an issue exists regarding what you'd like to contribute, leave a comment on it so that others know you're working
   on it.
    - Otherwise, create an issue and mention that you're handling the task.
      This is especially important for work our staff team hasn't signed off on yet — don't open a Pull Request if you
      haven't talked with us, otherwise you may end up doing work we ultimately decide not to accept.
4. Create a new branch on your fork to encapsulate your work.
   This is important as it allows you to more easily update the `main` branch in your fork whenever we make changes,
   and it means you can manage multiple Pull Requests at the same time if you'd like.
5. Start making changes!
   Remember to test that everything works, and especially ensure that everything looks good at every
   [Tailwind breakpoint](https://tailwindcss.com/docs/screens).
6. Once you've pushed at least one commit,
   [open your Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
   It is important to open your Pull Request early, so you can receive feedback as you work.
   If you're not ready to receive feedback yet, mark the Pull Request as a
   [draft(https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests)].
7. Once your Pull Request is ready for
   feedback, [mark it as ready for review](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request).
8. Keep an eye on your Pull Request, and ensure that you address and respond to any reviews and comments.
9. Once everyone's happy with your Pull Request, we'll merge it.
   Your changes should appear on the site within 5–10 minutes.
