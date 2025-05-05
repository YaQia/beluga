import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMdBufferStore = defineStore('mdBuffer', () => {
    const buffer = ref(`
# Important things to be remember

> [!IMPORTANT]
>
> Don't forget to check the class name, don't use too simple name of it. You will have no idea what class name other libraries would use.
> Also, use \`style scoped\` as necessary.
`)
    function updateBuffer(updatedBuf: string) {
        buffer.value = updatedBuf
    }

    return { buffer, updateBuffer }
})
