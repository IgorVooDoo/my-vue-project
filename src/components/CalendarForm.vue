<template>
    <div class="hello">
        <h2>Hello World!! </h2>
        <div>
            <calendar
              ref="calendarik"
              :attributes='attrs'
              v-model="select_date"
              @dayclick="dayClicked"
              >
            </calendar>
        </div>
        {{select_date}}
        <button @click="newDate">
            New Date
        </button>
        <button @click="nextMonth">
            nextMonth
        </button>
    </div>
</template>

<script>
export default {
  name: 'CalendarForm',
  data () {
    return {
      select_date: new Date('2020-01-21'),
      msg: 'Welcome to Your Vue.js App',
      attrs: [
        {
          key: 'date',
          highlight: true,
          dates: new Date('2020-01-21')
        }
      ]
    }
  },
  methods: {
    dayClicked (day) {
      this.select_date = day
    },
    newDate () {
      const calendar = this.$refs['calendarik']
      calendar.move(new Date())
      console(calendar.attrs)
    },
    nextMonth () {
      const calendar = this.$refs.calendarik

      calendar.focusDate(new Date(this.select_date.setMonth(this.select_date.getMonth() + 1)))
    }
  }
}
</script>
