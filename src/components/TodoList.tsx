import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'TodoList',
  props: {
    list: Array as PropType<string[]>,
    onDelete: Function as PropType<(i: number) => void>,
  },
  components: {},
  setup() {
    return {};
  },
  methods: {
    handleDelete(index: number) {
      this.onDelete?.(index);
    },
  },

  render() {
    const { list = [], handleDelete } = this;
    console.log('🚀🚀🚀 ~ list:', list);
    return (
      <div class="todoList">
        {list.length > 0 && (
          <ol>
            {list.map((item, index) => {
              return (
                <li key={index}>
                  <span>{ item }</span>
                  <span
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x
                  </span>
                </li>
              );
            })}
          </ol>
        )}

        {list.length === 0 && <div>暂无数据</div>}
      </div>
    );
  },
});
