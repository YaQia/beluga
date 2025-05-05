<template>
    <Milkdown id="milkdown-editor" />
</template>

<script setup lang="ts">
import { replaceAll } from '@milkdown/kit/utils'
import { Milkdown, useEditor } from '@milkdown/vue'
import { Crepe } from '@milkdown/crepe'
import { useMdBufferStore } from '@/stores/mdBuffer'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const bufferStore = useMdBufferStore()
const { buffer } = storeToRefs(bufferStore)

let isFocus = false
const editor = useEditor((root) => {
    const crepe = new Crepe({
        root,
        defaultValue: buffer.value,
    })
    crepe.on((listener) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        listener.markdownUpdated((ctx, markdown, prevMarkdown) => {
            if (
                isFocus ||
                document.getElementById('milkdown-editor')?.contains(document.activeElement)
            ) {
                buffer.value = markdown
            }
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        listener.focus((ctx) => {
            isFocus = true
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        listener.blur((ctx) => {
            isFocus = false
        })
    })
    return crepe
})
watch(buffer, () => {
    if (!isFocus && !document.getElementById('milkdown-editor')?.contains(document.activeElement))
        editor.get()?.action(replaceAll(buffer.value, false))
})
</script>

<style>
.milkdown {
    width: 50dvw;
    min-height: 100dvh;
}

/* 作用于真正渲染内容的最深层 editor 容器 */
.milkdown .editor {
    flex-direction: column;
    /* 确保不是 row/column 之一 */
}
</style>
