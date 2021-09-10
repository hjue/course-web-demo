<template>
    <div class="demo-split">
        <Split v-model="split1">
            <div slot="left" class="demo-split-pane">
                <Toc />
            </div>
            <div slot="right" class="demo-split-pane">
                <Doc :index="this.$store.state.currentSection" />
            </div>
        </Split>
    </div>
</template>
<script>
import Doc from '@/components/Doc'
import Toc from '@/components/Toc'
export default {
  components: { Doc, Toc },
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
