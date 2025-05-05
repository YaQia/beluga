<script setup lang="ts">
import VisualEditor from './components/VisualEditor.vue'
import SourceEditor from './components/SourceEditor.vue'
import { MilkdownProvider } from '@milkdown/vue'
</script>

<template>
    <div class="editorContainer">
        <div class="previewEditor">
            <MilkdownProvider>
                <VisualEditor />
            </MilkdownProvider>
        </div>
        <div class="sourceEditor">
            <SourceEditor />
        </div>
    </div>
</template>

<style scoped>
.editorContainer {
    display: flex;
    margin: 0;
    min-height: 100dvh;
}

.previewEditor {
    flex: 1;
}

.sourceEditor {
    flex: 1;
}
</style>
