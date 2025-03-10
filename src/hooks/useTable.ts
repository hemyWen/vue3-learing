import { ref } from "vue";

export function useTable(api: () => Promise<any>) {
  const data = ref([]);
  const refresh = () => {
    api().then((res) => {
      console.log("res====", res);
      data.value = res;
    });
  };
  refresh();
  return [data, refresh];
}
