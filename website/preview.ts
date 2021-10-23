import './preview.css';
import 'virtual:windi.css'
import { Component, createApp as create, defineComponent, h, provide, ref } from 'vue';

export function createApp(component: Component) {
  const app = create({
    setup() {
      return () => h('div', { class: 'flex flex-row justify-center items-center min-h-screen' }, [h(component)]);
    },
  });

  app.component(
    'RouterLink',
    defineComponent({
      setup(props, { slots }) {
        return () => h('a', props, slots.default ? slots.default() : []);
      },
    })
  );

  return app;
}
