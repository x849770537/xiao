<template>
  <div>
    <a-table
      :rowKey="works=>works.id"
      :pagination="false"
      :columns="columns"
      :dataSource="studentsAssignmentShow.works"
    >
      <template slot="operation" slot-scope="text, record,">
        <a :href="`${downloadPost}?id=${record.id}&type=student`">
          <a-button icon="download">下载</a-button>
        </a>
        <a-button @click="visible = record" icon="edit" type="primary">批改</a-button>
      </template>
    </a-table>
    <a-modal :visible="Boolean(visible)" @cancel="visible = false" :footer="null">
      <a-form>
        <a-form-item label="状态">
          <a-select v-model="fromData.status">
            <a-select-option
              v-for="(status_name, status) in work_status"
              :key="status"
              :value="status"
            >{{status_name}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="批改意见">
          <a-textarea autosize v-model="fromData.review" :value="visible.teacher_review"></a-textarea>
        </a-form-item>
        <!-- 上传 -->
        <a-form-item label="附件">
          <a-upload :action="uploadPost" :headers="{Token:info.token}" :data="{id:visible.id}">
            <a-button icon="upload">上传</a-button>
          </a-upload>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" @click="uploadfromData(visible)">完成</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>    
<script>
import { api } from "../utils/api";
import { mapState } from "vuex";
const work_status = {
  "0": "待批改",
  "1": "需完善",
  "2": "已完成"
};
const Post = "http://sandbox_api.estudy.chanke.xyz";
export default {
  name: "teacherstudent",
  props: {
    studentsAssignmentShow: Object,
    //下载API
    downloadPost: String
  },
  computed: {
    ...mapState("User", ["info"])
  },
  methods: {
    uploadfromData(visible) {
      const form = {
        id: visible.id,
        review: this.fromData.review,
        status: this.fromData.status
      };
      api.post("/teacher/review", form).then(stus => {
        this.studentsAssignmentShow.works.forEach(ele => {
          //提交后更改本地数据，让页面显示最新数据
          if (ele.id == visible.id) {
            ele.status = stus.status;
            ele.review = stus.review;
          }
        });
        this.visible = false;
      });
    }
  },
  data() {
    return {
      uploadPost: Post + "/teacher/upload",
      work_status,
      visible: false,
      fromData: {
        review: "",
        status: "1"
      },
      columns: [
        {
          title: "学员名字",
          dataIndex: "user.full_name"
        },
        {
          title: "学号",
          dataIndex: "user.name"
        },
        {
          title: "提交作业名称",
          dataIndex: "student_upload_name"
        },
        {
          title: "提交时间",
          dataIndex: "commit_time"
        },
        {
          title: "状态",
          customRender(text, record) {
            return work_status[record.status];
          }
        },
        {
          title: "操作",
          scopedSlots: {
            customRender: "operation"
          }
        }
      ]
    };
  }
};
</script>