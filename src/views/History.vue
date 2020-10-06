<template>
  <div>
    <div class="page-title">
      <h3>Табель</h3>
    </div>

    <div class="history-chart">
      <canvas></canvas>
    </div>

    <section>
      <form>
        <div class="row">
          <div class="input-field col s2">
            <select ref="selectProject">
              <option>Проект №1</option>
            </select>
            <label>Выберите проект</label>
          </div>
          <div class="input-field col s2">
            <select ref="selectDrawing">
              <option>Чертеж №1</option>
            </select>
            <label>Выберите чертеж</label>
          </div>
          <div class="">
            <input
              placeholder=""
              id="first_name"
              type="text"
              class=""
            />
            <label>Понедельник</label>
          </div>
          <div class="input-field col s1">
            <input
              placeholder=""
              id="first_name"
              type="text"
              class="validate"
            />
            <label>Вторник</label>
          </div>
          <div class="input-field col s1">
            <input
              placeholder=""
              id="first_name"
              type="text"
              class="validate"
            />
            <label>Среда</label>
          </div>
          <div class="input-field col s1">
            <input
              placeholder=""
              id="first_name"
              type="text"
              class="validate"
            />
            <label>Четверг</label>
          </div>
          <div class="input-field col s1">
            <input
              placeholder=""
              id="first_name"
              type="text"
              class="validate"
            />
            <label>Пятница</label>
          </div>
          <div class="input-field col s1">
            <input
              placeholder=""
              id="first_name"
              type="text"
              class="validate"
            />
            <label>Суббота</label>
          </div>
          <div class="input-field col s1">
            <input
              placeholder=""
              id="first_name"
              type="text"
              class="validate"
            />
            <label>Воскресенье</label>
          </div>
          <div class="input-field col s1">
            <input
              placeholder=""
              id="first_name"
              type="text"
              class="validate"
            />
            <label>Всего</label>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    select: null,
    current: null,
  }),
  mounted() {
    window.M.FormSelect.init(this.$refs.selectProject);
    window.M.FormSelect.init(this.$refs.selectDrawing);
    window.M.updateTextFields();
  },
};
</script>
