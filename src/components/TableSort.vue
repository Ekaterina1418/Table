<template>
  <div>
    <input class="input" v-model="value" type="text" />
    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">
            {{ info.place }}
             <font-awesome-icon icon="fa-solid fa-sort" @click="sortBy('id')"/>
          </th>
          
          <th scope="col">
            {{ info.log }}
            <font-awesome-icon
              icon="fa-solid fa-sort"
              @click="sortBy('mail')"
            />
          </th>
          <th class="column">
            {{ info.order }}
            <font-awesome-icon
              icon="fa-solid fa-sort"
              @click="sortBy('orders')"
            />
          </th>
          <th scope="col">
            {{ info.status }}
            <font-awesome-icon
              icon="fa-solid fa-sort"
              @click="sortBy('status')"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filter" :key="item.id">
          <th scope="row" class="place">{{ item.id }}</th>
          <td>{{ item.mail }}</td>
          <td>{{ item.orders }}</td>
          <td>{{ item.status }}</td>
        </tr>
      </tbody>
    </table>
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { mapMutations } from "vuex";
export default {
  name: "TableSort",
  data() {
    return {
      info: {
        place: "Место",
        log: "Логин",
        order: "Подтверждённые заказы",
        status: "Статус",
      },
      value: "",
      sortDirection: "asc",
      orders: [
        {
          id: 1,
          mail: "smith@gmail.com",
          orders: 312,
          status: "Ценитель красоты",
        },
        {
          id: 2,
          mail: "lenin@gmail.com",
          orders: 120,
          status: "Поставщик аксессуаров",
        },
        {
          id: 3,
          mail: "mask@gmail.com",
          orders: 98,
          status: "Конкурент минздрава",
        },
        {
          id: 4,
          mail: "dog@gmail.com",
          orders: 64,
          status: "рыбак",
        },
        {
          id: 5,
          mail: "nightmare@gmail.com",
          orders: 34,
          status: "oхотник",
        },
        {
          id: 6,
          mail: "cat@gmail.com",
          orders: 1,
          status: "Ценитель красоты",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["setOrderList", "sortBy"]),
  },
  computed: {
    filter() {
      const arr = this.orders.filter((order) => {
        const mail = order.mail.toUpperCase();
        return mail.includes(this.value.toUpperCase());
      });

      return arr;
    },
  },
  created() {
    this.setOrderList(this.orders);
    this.sortBy(this.orders, this.sortDirection);
  },
};
</script>

<style lang="scss">
</style>