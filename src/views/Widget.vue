<template>
  <section>
    <div v-show="step.fillingForm" class="fillingForm">
      <div class="title row">
        <i class="fa fa-user-plus col-md-3" aria-hidden="true"></i>
        <h4 class="col">Проверка физического лица</h4>
      </div>
      <form @submit.prevent="submitFillingForm()">
        <div class="margin">
          <div class="input-group">
            <input class="form-control inputIcon" 
              :class="{'border-danger': $v.surname.$dirty && !$v.surname.required}" 
              type="text" 
              name="surname" 
              placeholder="Фамилия" 
              v-model="surname">
            <div class="input-group-prepend">
              <span class="input-group-text" :class="{'border-danger': $v.surname.$dirty && !$v.surname.required}"><i class="fa fa-address-card" aria-hidden="true"></i></span> 
            </div>
          </div>
          <small v-if="$v.surname.$dirty && !$v.surname.required" class="text-danger">Ообязательное поле</small>
        </div>
        <div class="margin">
          <input class="form-control" 
            :class="{'border-danger': $v.name.$dirty && !$v.name.required}" 
            type="text" 
            name="name" 
            placeholder="Имя" 
            v-model="name">
          <small v-if="$v.name.$dirty && !$v.name.required" class="text-danger">Ообязательное поле</small>
        </div>
        <div class="margin">
          <input class="form-control" type="text" name="patronymic" placeholder="Отчество" v-model="patronymic">
        </div>
        <div class="margin inputDate">
          <flat-pickr name="birthDate" 
            :class="{'border-danger': $v.birthDate.$dirty && !$v.birthDate.required}"
            :config="formDateConfig" 
            v-model="birthDate" 
            placeholder="Дата рождения" 
            class="form-control"></flat-pickr>
          <small v-if="$v.birthDate.$dirty && !$v.birthDate.required" class="text-danger">Ообязательное поле</small>
        </div>
        <div class="margin">
          <select name="region"
            :class="{'border-danger': ($v.region.$dirty && !$v.region.required) || ($v.region.$dirty && $v.region.$error)}"
            class="form-control" 
            v-model="region"
            @change="$v.region.$touch()">
            <option>
              Регион проживания
            </option>
            <option v-for="reg in regions" :key="reg.i" :value="{id: reg.id, region: reg.region}">
              {{reg.region}}
            </option>
            
            <!-- <option>
              Алтайский край
            </option>
            <option>
              Амурская область
            </option>
            <option>
              Архангельская область
            </option>
            <option>
              Астраханская область
            </option>
            <option>
              Белгородская область
            </option>
            <option>
              Брянская область
            </option>
            <option>
              Владимирская область
            </option>
            <option>
              Волгоградская область
            </option>
            <option>
              Вологодская область
            </option>
            <option>
              Воронежская область
            </option>
            <option>
              г. Москва
            </option>
            <option>
              Еврейская автономная область
            </option>
            <option>
              Забайкальский край
            </option>
            <option>
              Ивановская область
            </option>
            <option>
              Иркутская область
            </option>
            <option>
              Кабардино-Балкарская Республика
            </option>
            <option>
              Калининградская область
            </option>
            <option>
              Калужская область
            </option>
            <option>
              Камчатский край
            </option>
            <option>
              Карачаево-Черкесская Республика
            </option>
            <option>
              Кемеровская область
            </option>
            <option>
              Кировская область
            </option>
            <option>
              Костромская область
            </option>
            <option>
              Краснодарский край
            </option>
            <option>
              Красноярский край
            </option>
            <option>
              Курганская область
            </option>
            <option>
              Курская область
            </option>
            <option>
              Ленинградская область
            </option>
            <option>
              Липецкая область
            </option>
            <option>
              Магаданская область
            </option>
            <option>
              Московская область
            </option>
            <option>
              Мурманская область
            </option>
            <option>
              Ненецкий автономный округ
            </option>
            <option>
              Нижегородская область
            </option>
            <option>
              Новгородская область
            </option>
            <option>
              Новосибирская область
            </option>
            <option>
              Омская область
            </option>
            <option>
              Оренбургская область
            </option>
            <option>
              Орловская область
            </option>
            <option>
              Пензенская область
            </option>
            <option>
              Пермский край
            </option>
            <option>
              Приморский край
            </option>
            <option>
              Псковская область
            </option>
            <option>
              Республика Адыгея (Адыгея)
            </option>
            <option>
              Республика Алтай
            </option>
            <option>
              Республика Башкортостан
            </option>
            <option>
              Республика Бурятия
            </option>
            <option>
              Республика Дагестан
            </option>
            <option>
              Республика Ингушетия
            </option>
            <option>
              Республика Калмыкия
            </option>
            <option>
              Республика Карелия
            </option>
            <option>
              Республика Коми
            </option>
            <option>
              Республика Крым
            </option>
            <option>
              Республика Марий Эл
            </option>
            <option>
              Республика Мордовия
            </option>
            <option>
              Республика Саха (Якутия)
            </option>
            <option>
              Республика Северная Осетия - Алания
            </option>
            <option>
              Республика Татарстан (Татарстан)
            </option>
            <option>
              Республика Тыва
            </option>
            <option>
              Республика Хакасия
            </option>
            <option>
              Ростовская область
            </option>
            <option>
              Рязанская область
            </option>
            <option>
              Самарская область
            </option>
            <option>
              Санкт-Петербург
            </option>
            <option>
              Саратовская область
            </option>
            <option>
              Сахалинская область
            </option>
            <option>
              Свердловская область
            </option>
            <option>
              Севастополь
            </option>
            <option>
              Смоленская область
            </option>
            <option>
              Ставропольский край
            </option>
            <option>
              Тамбовская область
            </option>
            <option>
              Тверская область
            </option>
            <option>
              Томская область
            </option>
            <option>
              Тульская область
            </option>
            <option>
              Тюменская область
            </option>
            <option>
              Удмуртская Республика
            </option>
            <option>
              Ульяновская область
            </option>
            <option>
              Хабаровский край
            </option>
            <option>
              Ханты-Мансийский автономный округ - Югра
            </option>
            <option>
              Челябинская область
            </option>
            <option>
              Чеченская Республика
            </option>
            <option>
              Чувашская Республика - Чувашия
            </option>
            <option>
              Чукотский автономный округ
            </option>
            <option>
              Ямало-Ненецкий автономный округ
            </option>
            <option>
              Ярославская область
            </option> -->
          </select>
          <small v-if="($v.region.$dirty && !$v.region.required) || ($v.region.$dirty && $v.region.$error)" class="text-danger">Выбирете регион</small>
        </div>
        <div class="form-group form-check margin">
          <input type="checkbox" class="form-check-input" id="isPassportData" v-model="passChecked">
          <label class="form-check-label" for="isPassportData">Паспортные данные</label>
        </div>
        <div class="form-group" v-if="passChecked">
          <div class="margin">
            <div class="input-group">
              <input class="form-control inputIcon"
                :class="{'border-danger': ($v.seriesAndNumber.$dirty && !$v.seriesAndNumber.required) || ($v.seriesAndNumber.$dirty && $v.seriesAndNumber.$error)}"
                type="text" name="seriesAndNumber" 
                v-mask="'## ## ######'" 
                placeholder="Серия и номер паспорта" 
                v-model="seriesAndNumber">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-lock" aria-hidden="true"></i></span>
              </div>
            </div>
            <small v-if="($v.seriesAndNumber.$dirty && !$v.seriesAndNumber.required) || ($v.seriesAndNumber.$dirty && $v.seriesAndNumber.$error)" class="text-danger">Ообязательное поле</small>
          </div>
          <div class="margin inputDate">
            <div class="input-group">
              <flat-pickr name="issueDate"
                :class="{'border-danger': $v.issueDate.$dirty && !$v.issueDate.required}"
                :config="formDateConfig" 
                v-model="issueDate" 
                placeholder="Дата выдачи" 
                class="form-control inputIcon"></flat-pickr>
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-lock" aria-hidden="true"></i></span>
              </div>
            </div>
            <small v-if="$v.issueDate.$dirty && !$v.issueDate.required" class="text-danger">Ообязательное поле</small>
          </div>
        </div>
        <div class="form-group form-check acceptCheck margin">
          <input type="checkbox" class="form-check-input" id="isAcceptCheck" @change="$v.isAcceptCheck.$touch()" v-model="isAcceptCheck">
          <label class="form-check-label" for="isAcceptCheck">
            Согласен с <a href="#" @click="showPolitics">политикой о персональных данных</a> и принимаю <a href="#">оферту</a>
          </label>
          <div>
            <small v-if="$v.isAcceptCheck.$dirty && $v.isAcceptCheck.$error" class="text-danger">Чтобы продолжить, установите этот флажок</small>
          </div>
        </div>
        <button type="submit" class="btn btn-primary form-control">НАЧАТЬ ПРОВЕРКУ</button>
      </form>
    </div>
    <div v-show="step.ordering" class="ordering">
      <div class="title row">
        <i class="fa fa-user-plus col-md-2" aria-hidden="true"></i>
        <h4 class="col">Заказ проверки физического лица</h4>
      </div>
      <div class="body border rounded-bottom">
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <div>
              <i class="fa fa-user text-primary" aria-hidden="true"></i>
              <strong>Проверка введенных данных</strong>
            </div>
            <div>
              <i class="fa fa-info-circle text-primary" 
                title="Проверка осуществляется из открытых источников на основании введенных пользователем данных" 
                v-tippy="{ arrow: true, size: 'small' }" 
                aria-hidden="true"></i>
            </div>
          </div>
          <div class="list-group-item">
            <div class="fio">
              <i class="fa fa-address-card text-primary" aria-hidden="true"></i><strong>{{surname}} {{name}} {{patronymic}}</strong>
            </div>
            <div class="info row">
              <div class="infoBlock col-md-6">
                <div class="label">Дата рождения</div>
                <strong class="value">{{birthDate}}</strong>
              </div>
              <div class="infoBlock col-md-6">
                <div class="label">Регион</div>
                <strong class="value">{{region.region}}</strong>
              </div>
            </div>
            <div v-show="passChecked" class="info row">
              <div class="infoBlock col-md-6">
                <div class="label">Паспорт</div>
                <strong class="value">{{seriesAndNumber}}</strong>
              </div>
              <div class="infoBlock col-md-6">
                <div class="label">Дата выдачи</div>
                <strong class="value">{{issueDate}}</strong>
              </div>
            </div>
            <div class="mail" @submit.prevent="addOrdering()">
              <form>
                <label for="email">Рузультат проверки будет отправлен вам на E-mail в течении 10 минут<i class="fa fa-info-circle"
                  aria-hidden="true"
                  title="Отчет формируется за 10 минут, но иногда проверка может осуществляться в течение 1 рабочего дня" 
                  v-tippy="{ arrow: true, size: 'small' }"></i></label>
                <input type="email" 
                  :class="{'border-danger': emailErr}"
                  class="form-control" 
                  id="email" 
                  v-model="email" 
                  placeholder="E-mail для получения документа">
                <small v-if="emailErr" class="text-danger">Ообязательное поле</small>
                <div class="text-center">
                  <button class="btn btn-primary" type="sumbmit">ПОДТВЕРДИТЬ ЗАКАЗ 349 РУБ.</button>
                </div>
              </form>
            </div>
            <footer class="row">
              <div class="col text-center">
                <div>
                  <i class="fa fa-file text-primary" aria-hidden="true"></i>
                </div>
                Результат в формате<br>PDF
              </div>
              <div class="col text-center">
                <div>
                  <i class="fa fa-rocket text-primary" aria-hidden="true"></i>
                </div>
                Быстрая обработка запросов, круглосуточно 24/7
              </div>
              <div class="col text-center">
                <div>
                  <i class="fa fa-reply text-primary" aria-hidden="true"></i>
                </div>
                Возврат денег, если мы не сможем предоставить отчет
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
    <div v-show="step.finish" class="finish">
      <div class="title row">
        <i class="fa fa-user-plus col-md-2" aria-hidden="true"></i>
        <h4 class="col">Заказ проверки физического лица</h4>
      </div>
      <div class="body border rounded-bottom">
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <div>
              <i class="fa fa-user text-primary" aria-hidden="true"></i>
              <strong class="text-muted">Заказ принят в работу.</strong>
              <div>
                <strong class="text-muted">Результат проверки будет отправлен на ваш e-mail *{{email}}*</strong>
              </div>
            </div>
          </div>
          <div class="list-group-item">
            <div class="fio">
              <strong class="text-primary">{{surname}} {{name}} {{patronymic}}</strong>
            </div>
            <div class="data">
              <i class="fa fa-address-card text-primary" aria-hidden="true"></i><strong>Данные</strong> 
            </div>
            <div v-show="passChecked" class="info row">
              <div class="infoBlock col-md-6">
                <div class="label">Паспорт</div>
                <strong class="value">{{seriesAndNumber}}</strong>
              </div>
              <div class="infoBlock col-md-6">
                <div class="label">Дата рождения</div>
                <strong class="value">{{birthDate}}</strong>
              </div>
            </div>
            <div class="info row">
              <div class="infoBlock col-md-6">
                <div class="label">Регион</div>
                <strong class="value">{{region.region}}</strong>
              </div>
              <div class="infoBlock col-md-6">
                <div class="label">ИНН</div>
                <strong class="value">{{inn}}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import Politics from '@/components/Politics.vue';
  import axios from 'axios'
  import {TheMask} from 'vue-the-mask'
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';
  import { required, maxLength, minLength, helpers } from 'vuelidate/lib/validators';
  const checkRegion = (value) => {
    return value != "Регион проживания"
  }

  export default {
    components: {
      Politics,
      TheMask,
      flatPickr
    },
    data() {
      return {
        step: {
          fillingForm: true,
          // ordering: true
        },
        regions: [
          {
            id: "22",
            region: 'Алтайский край'
          },
          {
            id: "28",
            region: 'Амурская область'
          },
          {
            id: "29",
            region: 'Архангельская область'
          },
          {
            id: "30",
            region: 'Астраханская область'
          },
          {
            id: "31",
            region: 'Белгородская область'
          },
          {
            id: "32",
            region: 'Брянская область'
          },
          {
            id: "33",
            region: 'Владимирская область'
          },
          {
            id: "34",
            region: 'Волгоградская область'
          },
          {
            id: "35",
            region: 'Вологодская область'
          },
          {
            id: "36",
            region: 'Воронежская область'
          },
          {
            id: "77",
            region: 'г. Москва'
          },
          {
            id: "79",
            region: 'Еврейская автономная область'
          },
          {
            id: "75",
            region: 'Забайкальский край'
          },
          {
            id: "37",
            region: 'Ивановская область'
          },
          {
            id: "38",
            region: 'Иркутская область'
          },
          {
            id: "7",
            region: 'Кабардино-Балкарская Республика'
          },
          {
            id: "39",
            region: 'Калининградская область'
          },
          {
            id: "40",
            region: 'Калужская область'
          },
          {
            id: "41",
            region: 'Камчатский край'
          },
          {
            id: "9",
            region: 'Карачаево-Черкесская Республика'
          },
          {
            id: "42",
            region: 'Кемеровская область'
          },
          {
            id: "43",
            region: 'Кировская область'
          },
          {
            id: "44",
            region: 'Костромская область'
          },
          {
            id: "23",
            region: 'Краснодарский край'
          },
          {
            id: "24",
            region: 'Красноярский край'
          },
          {
            id: "45",
            region: 'Курганская область'
          },
          {
            id: "46",
            region: 'Курская область'
          },
          {
            id: "47",
            region: 'Ленинградская область'
          },
          {
            id: "48",
            region: 'Липецкая область'
          },
          {
            id: "49",
            region: 'Магаданская область'
          },
          {
            id: "50",
            region: 'Московская область'
          },
          {
            id: "51",
            region: 'Мурманская область'
          },
          {
            id: "83",
            region: 'Ненецкий автономный округ'
          },
          {
            id: "52",
            region: 'Нижегородская область'
          },
          {
            id: "53",
            region: 'Новгородская область'
          },
          {
            id: "54",
            region: 'Новосибирская область'
          },
          {
            id: "55",
            region: 'Омская область'
          },
          {
            id: "56",
            region: 'Оренбургская область'
          },
          {
            id: "57",
            region: 'Орловская область'
          },
          {
            id: "58",
            region: 'Пензенская область'
          },
          {
            id: "59",
            region: 'Пермский край'
          },
          {
            id: "25",
            region: 'Приморский край'
          },
          {
            id: "60",
            region: 'Псковская область'
          },
          {
            id: "1",
            region: 'Республика Адыгея (Адыгея)'
          },
          {
            id: "4",
            region: 'Республика Алтай'
          },
          {
            id: "2",
            region: 'Республика Башкортостан'
          },
          {
            id: "3",
            region: 'Республика Бурятия'
          },
          {
            id: "5",
            region: 'Республика Дагестан'
          },
          {
            id: "6",
            region: 'Республика Ингушетия'
          },
          {
            id: "8",
            region: 'Республика Калмыкия'
          },
          {
            id: "10",
            region: 'Республика Карелия'
          },
          {
            id: "11",
            region: 'Республика Коми'
          },
          {
            id: "91",
            region: 'Республика Крым'
          },
          {
            id: "12",
            region: 'Республика Марий Эл'
          },
          {
            id: "13",
            region: 'Республика Мордовия'
          },
          {
            id: "14",
            region: 'Республика Саха (Якутия)'
          },
          {
            id: "15",
            region: 'Республика Северная Осетия - Алания'
          },
          {
            id: "16",
            region: 'Республика Татарстан (Татарстан)'
          },
          {
            id: "17",
            region: 'Республика Тыва'
          },
          {
            id: "19",
            region: 'Республика Хакасия'
          },
          {
            id: "61",
            region: 'Ростовская область'
          },
          {
            id: "62",
            region: 'Рязанская область'
          },
          {
            id: "63",
            region: 'Самарская область'
          },
          {
            id: "78",
            region: 'Санкт-Петербург'
          },
          {
            id: "64",
            region: 'Саратовская область'
          },
          {
            id: "65",
            region: 'Сахалинская область'
          },
          {
            id: "66",
            region: 'Свердловская область'
          },
          {
            id: "92",
            region: 'Севастополь'
          },
          {
            id: "67",
            region: 'Смоленская область'
          },
          {
            id: "26",
            region: 'Ставропольский край'
          },
          {
            id: "68",
            region: 'Тамбовская область'
          },
          {
            id: "69",
            region: 'Тверская область'
          },
          {
            id: "70",
            region: 'Томская область'
          },
          {
            id: "71",
            region: 'Тульская область'
          },
          {
            id: "72",
            region: 'Тюменская область'
          },
          {
            id: "18",
            region: 'Удмуртская Республика'
          },
          {
            id: "73",
            region: 'Ульяновская область'
          },
          {
            id: "27",
            region: 'Хабаровский край'
          },
          {
            id: "86",
            region: 'Ханты-Мансийский автономный округ - Югра'
          },
          {
            id: "74",
            region: 'Челябинская область'
          },
          {
            id: "20",
            region: 'Чеченская Республика'
          },
          {
            id: "21",
            region: 'Чувашская Республика - Чувашия'
          },
          {
            id: "87",
            region: 'Чукотский автономный округ'
          },
          {
            id: "89",
            region: 'Ямало-Ненецкий автономный округ'
          },
          {
            id: "76",
            region: 'Ярославская область'
          }
        ],
        errName: false,
        isPoliticsVisible: false,
        passChecked: false,
        surname: null,
        name: null,
        patronymic: null,
        birthDate: null,
        birthDateFormat: null,
        region: "Регион проживания",
        seriesAndNumber: null,
        issueDate: null,
        issueDateFormat: null,
        isAcceptCheck: false,
        email: null,
        emailErr: false,
        inn: null,
        product: '',
        formDateConfig: {
          dateFormat: "d.m.Y",
          maxDate: new Date()
        },
        order: {}
      }
    },
    validations() {
      if (this.passChecked) {
        return {
          surname: {
            required
          },
          name: {
            required
          },
          birthDate: {
            required
          },
          region: {
            required,
            checkRegion
          },
          seriesAndNumber: {
            required,
            minLength: minLength(12)
          },
          issueDate: {
            required
          },
          isAcceptCheck: {
            checked(val) {
              return val;
            }
          }
        }
      } else {
        return {
          surname: {
            required
          },
          name: {
            required
          },
          birthDate: {
            required
          },
          region: {
            required,
            checkRegion
          },
          isAcceptCheck: {
            checked(val) {
              return val;
            }
          }
        }
      }
    },
    methods: {
      showPolitics() {
        this.$modal.show(
          Politics, 
          {},
          {
            height: '760px'
          }
        )
      },
      submitFillingForm() {
        if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }

        const birthDate = this.birthDate.split('.')
        this.birthDateFormat = birthDate[2] + "-" + birthDate[1] + "-" + birthDate[0]

        if (this.passChecked) {
          const issueDate = this.issueDate.split('.')
          this.issueDateFormat = issueDate[2] + "-" + issueDate[1] + "-" + issueDate[0]
        }

        axios
          .get('https://api.realtycloud.ru/products')
          .then(response => {
            let data = response.data.data

            for (let i = 0; i < data.length; i++) {
              if (data[i].product_name == "CheckOwner")
                {
                  this.product = data[i]
                }
            }
          });

        this.step = {ordering: true}
      },
      addOrdering() {
        if (!this.email) {
          this.emailErr = true;
          return
        } else this.emailErr = false;

        let request = JSON.stringify({
          email: this.email,
          order_items: [
            {
              product_id: this.product.product_id,
              object_key: "n/a"
            }
          ]
        })

        const headers = {
          'Content-Type': 'application/json',
          'API-Key': '9PQ5A-NUX15-T1T2B-9D2VO'
        }

        axios.post('https://api.realtycloud.ru/order', request, {
          headers: headers
        })
          .then((response) => {
            const data = response.data.data
            console.log(data)
            this.order = {
              id: data.id,
              total_amount: data.total_amount,
              orderItemsId: data.order_items[0].order_item_id,
              // jwtToken: response.jwt
            }

            var widget = new cp.CloudPayments();

            // widget.charge({ 
            //   publicId: data.order_items[0].product_id,  //id из личного кабинета мы вам его предоставим
            //   description: 'Проверка собственников', // описание, показывается при открытии виджета 
            //   amount: Number(1000), //сумма (ОБЯЗАТЕЛЬНО)
            //   currency: 'RUB', // валюта
            //   invoiceId: this.order.id, // номер заказа  (ОБЯЗАТЕЛЬНО)
            //   accountId: 'user@example.com', //идентификатор плательщика (ОБЯЗАТЕЛЬНО)
            //   skin: "mini", //дизайн виджета
            //   data: {
            //     userId: '8a1b775b' // (ОБЯЗАТЕЛЬНО)
            //   }
            // },
            // function (options) { // success
            //   //действие при успешной оплате
            // },
            // function (reason, options) { // fail
            //   //действие при неуспешной оплате
            // });

            const userInfo = [{
              id: "",
              first: this.name,
              surname: this.surname,
              ownerType: 1,
              birthday: this.birthDateFormat,
              region: this.region.id,
              passport: this.seriesAndNumber
            }];

            if (this.patronymic)
              userInfo[0].patronymic = this.patronymic

            axios.post('https://api.realtycloud.ru/risk/owner', JSON.stringify(userInfo), {
              headers: headers
            })
              .then((res) => {
                console.log(res)
              })
              .catch((err) => {
                console.log(err);
              });

          })
          .catch((error) => {
            console.log(error);
          });

        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn-primary {
    background-color: #409eff;
    border-color: #409eff;
  }
  .text-primary {
    color: #409eff;
  }
  button {
    font-size: 14px;
    font-weight: 500;
  }
  .inputDate {
    .form-control:disabled, .form-control[readonly] {
      background-color: #fff !important;
    }
  }
  .inputErr {
    color: #ff4949;
    font-size: 12px;
    position: absolute;
  }
  .title {
    color: #fff;
    font-weight: 7 00;
    background-color: #293fcc;
    margin: 0px;
    padding: 15px 0px;
    i {
      font-size: 54px;
    }
    h4 {
      padding-top: 10px;
    }
  }
  .fillingForm {
    width: 360px;
    background-color: #293fcc;
    margin: 0 auto;
    form {
      padding: 15px;
      label, a {  
        color: #fff;
      }
      a {
        text-decoration: underline;
        &:hover {
          text-decoration: none;
        }
      }
      .margin { 
        margin-bottom: 26px;
        span {   
          background-color: #fff;
          border: 1px solid #ced4da;
          border-radius: .25rem;
          border-left: none;
          color: #90969b;
        }
        small {
          position: absolute;
        }
      }
      .inputIcon {
        border-right: none;
      }
    }
  }
  section {
    // font-family: 'Open Sans', sans-serif;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-weight: 400;
  }
  .acceptCheck {
    margin-top: 35px;
  }
  .fa-user {
    margin-right: 12px;
  }
  .info {
    margin-bottom: 7px;
    margin-left: 15px;
    .infoBlock {
      .label {
        color: #6c757d;
        font-size: 14px;
      }
    }
  }
  .ordering {
    width: 615px;
    margin: 0 auto;
    .body {
      padding: 6px;
    }
    .card-header {
      border-bottom: none;
      strong {
        font-size: 15px;
      }
    }
    .list-group-item {
      border-top: none;
    }
    .fio {
      margin-bottom: 10px;
      i {
        margin-right: 12px;
      }
    }
    .mail {
      margin-top: 30px;
      font-weight: 500;
      div {
        margin-top: 22px;
      }
      i {
        margin-left: 6px;
      }
    } 
    footer {
      color: #6c757d;
      font-size: 13px;
      margin-top: 40px;
      i {
        font-size: 24px;
        margin-bottom: 10px;
      }
    }
  }
  .finish {
    width: 680px;
    margin: 0 auto;
    .body {
      padding: 6px;
    }
    .data {
      i {
        margin-right: 12px;
      }
    }
    .fio {
      margin-left: 18px;
      margin-bottom: 9px;
    }
  }
</style>