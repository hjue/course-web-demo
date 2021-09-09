<template>
    <div class="demo-split">
        <Split v-model="split1">
            <div slot="left" class="demo-split-pane">
                课程目录
            </div>
            <div slot="right" class="demo-split-pane">
                <Doc />
            </div>
        </Split>
    </div>
</template>
<script>
import Doc from '@/components/Doc'
export default {
  components: { Doc },
  data () {
    return {
      split1: 0.2
    }
  }
}
</script>
<style>
    .demo-split{
        height: 100%;
        border: 1px solid #dcdee2;
    }
    .demo-split-pane{
        padding: 10px;
    }
</style>
