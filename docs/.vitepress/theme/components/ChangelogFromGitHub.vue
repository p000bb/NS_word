<script setup lang="ts">
import { ref, onMounted } from "vue";
import { marked } from "marked";

// #region 类型与常量
const GITHUB_RELEASES_API =
  "https://api.github.com/repos/p000bb/NS_word/releases?per_page=30";

interface GitHubRelease {
  tag_name: string;
  name: string | null;
  published_at: string;
  body: string | null;
}

interface ReleaseWithHtml extends GitHubRelease {
  bodyHtml: string;
}
// #endregion

// #region 响应式数据
const loading = ref(true);
const error = ref<string | null>(null);
const releases = ref<ReleaseWithHtml[]>([]);
// #endregion

// #region 方法
const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

const bodyToHtml = (body: string | null): string => {
  if (!body || !body.trim()) return "";
  return marked(body) as string;
};
// #endregion

// #region 拉取 Releases
onMounted(async () => {
  try {
    const res = await fetch(GITHUB_RELEASES_API);
    if (!res.ok) {
      const msg =
        res.status === 403
          ? "请求过于频繁，请稍后再试"
          : `请求失败: ${res.status}`;
      error.value = msg;
      return;
    }
    const data = (await res.json()) as GitHubRelease[];
    releases.value = data.map((r) => ({
      ...r,
      bodyHtml: bodyToHtml(r.body),
    }));
  } catch (e) {
    error.value = e instanceof Error ? e.message : "加载失败";
  } finally {
    loading.value = false;
  }
});
// #endregion
</script>

<template>
  <div class="changelog-from-github">
    <p v-if="loading" class="changelog-loading">正在从 GitHub 加载更新日志…</p>
    <p v-else-if="error" class="changelog-error">
      {{ error }}
      <a
        href="https://github.com/p000bb/NS_word/releases"
        target="_blank"
        rel="noopener noreferrer"
      >
        前往 GitHub Releases 查看
      </a>
    </p>
    <template v-else>
      <section
        v-for="release in releases"
        :key="release.tag_name"
        class="release-block"
      >
        <h2 class="release-title">
          {{ release.name || release.tag_name }}
          <span class="release-date">{{
            formatDate(release.published_at)
          }}</span>
        </h2>
        <div
          v-if="release.bodyHtml"
          class="release-body vp-doc"
          v-html="release.bodyHtml"
        />
        <p v-else class="release-body-empty">暂无说明</p>
      </section>
    </template>
  </div>
</template>

<style scoped>
.changelog-from-github {
  margin-top: 1rem;
}

.changelog-loading,
.changelog-error {
  color: var(--vp-c-text-2);
}

.changelog-error a {
  margin-left: 0.5em;
  color: var(--vp-c-brand-1);
}

.release-block {
  margin-bottom: 2rem;
}

.release-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.release-date {
  font-size: 0.875rem;
  font-weight: normal;
  color: var(--vp-c-text-2);
  margin-left: 0.5rem;
}

.release-body :deep(ul) {
  padding-left: 1.5rem;
}

.release-body :deep(li) {
  margin: 0.25rem 0;
}

.release-body-empty {
  color: var(--vp-c-text-2);
  font-style: italic;
}
</style>
