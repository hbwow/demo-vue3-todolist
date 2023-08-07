import { ref, defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  props: { onSubmit: Function as PropType<(str: string) => void> },
  setup(props) {
    const value = ref('');

    const handleSubmit = () => {
      props.onSubmit?.(value.value);
      value.value = '';
    };

    return () => (
      <div class="todoInput">
        <input
          type="text"
          value={value.value}
          onChange={(e: Event) => {
            value.value = e.target.value;
          }}
        />
        <button onClick={handleSubmit}>提交</button>
      </div>
    );
  },
});
