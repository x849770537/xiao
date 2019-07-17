<template>
  <a-layout id="app">
    <a-layout-header class="header flexrow">
      <h2 class="logo">蝉壳 eStudy</h2>
      <div v-if="loggerin" class="heardercontbox flexrow">
        <!-- 老师头部 -->
        <div v-if="isTeacher" class="flexrow">
          <h4>{{info.full_name}}</h4>
          <a-button type="primary" icon="file-add" @click="visible = true">新建作业</a-button>
        </div>
        <div v-else class="flexrow">
          <h4 class="flexcol">
            <span>{{ info.full_name}}</span>
            <span>{{ info.name}}</span>
          </h4>
          <div class="flexcol">
            <!-- {{stduent}} -->
            <span v-for="item in stduent.orgs" :key="item">{{ item }}</span>
          </div>
          <div>{{stduent.stats.uncommitted}}个作业待提交</div>
          <div>{{stduent.stats.revising}}个作业待批改</div>
          <div>{{stduent.stats.improvable}}个作业待完善</div>
          <div>{{stduent.stats.finished}}个作业已完成</div>
          <a-button>作业</a-button>
          <a-button>内部资料</a-button>
        </div>
        <a href="http://vipgit.chanke.xyz/" target="_black" class="btnmargin">
          <a-button>代码厂库</a-button>
        </a>
        <!-- 触发User下logOout函数 -->
        <a-button @click="$store.dispatch('User/logOut')" class="btnmargin">退出</a-button>
      </div>
    </a-layout-header>
    <a-layout-content class="content">
      <app-content v-if="!loggerin"></app-content>
      <div v-else>
        <app-teacher v-if="isTeacher" :teacher="teacher"></app-teacher>
        <app-student v-else :stduent="stduent"></app-student>
      </div>
    </a-layout-content>
    <a-modal :visible="visible" @cancel="visible = false" :footer="null">
      <a-form>
        <a-form-item label="课程：">
          <a-select v-model="formData.org_id">
            <a-select-option
              v-for="item in  teacher.orgs"
              :key="item.id"
              :value="item.id"
            >{{item.full_name}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="作业名称：">
          <a-textarea autosize v-model="formData.name"></a-textarea>
        </a-form-item>
        <a-form-item label="开始/结束时间">
          <a-range-picker
            @change="onDataChange"
            :defaultValue="[moment(moment(Date.now()).format(dateFormat), dateFormat), moment(moment(Date.now()).format(dateFormat), dateFormat)]"
            :format="dateFormat"
          />
        </a-form-item>
        <a-form-item>
          <a-button @click="createAssignment">保存</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </a-layout>
</template>

<script>
//使用辅助函数快速获取VUEx的值
import { mapState } from "vuex";
import moment from "moment";
import { api } from "./utils/api";
import AppTeacher from "./components/AppTeacher";
import AppStudent from "./components/AppStudent";
import AppContent from "./components/AppContent.vue";
export default {
  name: "app",
  components: {
    AppContent,
    AppStudent,
    AppTeacher
  },
  created: function() {
    if (this.loggerin) {
      if (this.info.is_admin == "1") {
        this.teacherUpdata();
      } else {
        this.stduentUpdata();
      }
    }
  },
  data() {
    return {
      dateFormat: "YYYY/MM/DD",
      monthFormat: "YYYY/MM",
      formData: {
        org_id: "",
        name: "",
        start_time: "",
        end_time: "",
        student_count: 0
      },
      visible: false,
      stduent: {
        orgs: [],
        assignments: [],
        stats: {}
      },
      teacher: {
        orgs: [],
        assignments: [],
        resources: []
      }
    };
  },
  watch: {
    loggerin() {
      if (this.info.is_admin > 0) {
        this.teacherUpdata();
      } else {
        this.stduentUpdata();
      }
    }
  },
  computed: {
    ...mapState("User", ["loggerin", "info"]),
    isTeacher() {
      return this.info.is_admin > 0;
    }
  },
  methods: {
    stduentUpdata() {
      api.get("/student/detail").then(data => {
        this.stduent.orgs = data.orgs;
        this.stduent.stats = data.stats;
        this.stduent.assignments = data.assignments;
      });
    },
    teacherUpdata() {
      api.get("/teacher/detail").then(data => {
        this.teacher.orgs = data.orgs;
        this.teacher.resources = data.resources;
        this.teacher.assignments = data.assignments;
      });
    },
    moment,
    onDataChange(data) {
      this.formData.start_time = moment(data[0]._d).format("YYYY-MM-DD");
      this.formData.end_time = moment(data[1]._d).format("YYYY-MM-DD");
      
    },
    createAssignment() {
      api.post("/teacher/createAssignment", this.formData).then(data => {
        this.teacher.orgs.forEach(element => {
        if (element.id == this.formData.org_id) {
          data.student_count = element.student_count;
        }
      });
        this.teacher.assignments.unshift(data);
        this.visible = false;
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
.logo {
  color: #fff;
}
.flexrow {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}
.heardercontbox {
  color: #fff;
  margin-left: auto;
  h4 {
    color: #fff;
  }
  .flexrow > * {
    margin: 5px;
  }
}
.btnmargin {
  margin: 5px;
}
.flexcol {
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    height: 20px;
    line-height: 20px;
  }
}
</style>
