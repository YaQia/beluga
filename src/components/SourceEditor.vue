<template>
    <VueMonacoEditor
        v-model:value="buffer"
        language="markdown"
        theme="vs-dark"
        :options="MONACO_EDITOR_OPTIONS"
        height="100dvh"
        @mount="handleMount"
    />
</template>

<script setup lang="ts">
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import { shallowRef } from 'vue'
import { useMdBufferStore } from '@/stores/mdBuffer'
import { storeToRefs } from 'pinia'

const MONACO_EDITOR_OPTIONS = {
    automaticLayout: true,
    formatOnType: true,
    formatOnPaste: true,
}

const editor = shallowRef()
const handleMount = (editorInstance: unknown) => (editor.value = editorInstance)

const bufferStore = useMdBufferStore()
const { buffer } = storeToRefs(bufferStore)

// your action
// function formatCode() {
//     editor.value?.getAction('editor.action.formatDocument').run()
// }
</script>

<style scoped></style>
