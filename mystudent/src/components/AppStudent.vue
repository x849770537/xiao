<template>
  <div>
    <a-table
      :rowKey="assignments=>assignments.assignment_id"
      :columns="columns"
      :dataSource="stduent.assignments"
      :pagination="false"
    >
      <template slot="operation" slot-scope="text, record,">
        <a-upload
          name="file"
          :action="uploadPost"
          :data="{id:record.assignment_id}"
          :headers="{Token:info.token}"
          @change="handleChange"
          :showUploadList="false"
        >
          <a-button icon="upload">上传</a-button>
        </a-upload>
        <a v-if="record.work" :href="`${downloadPost}?id=${record.work.id}&type=student`">
          <a-button icon="download">下载</a-button>
        </a>
      </template>
      <template slot="info" slot-scope="text, record,">
        <div v-if="record.work">
          <div
            v-if="record.work.status== '0'"
          >{{record.work.teacher_download_time == "0000-00-00" ? `${record.work.commit_time}提交`: `${record.work.teacher_download_time}老师已下载`}}</div>
          <div v-else-if="record.work.status== '1'">
            <p>{{`${record.work.review_time}老师提交修改意见`}}</p>
            <a-button @click="clickChange(record.work)">查看详情</a-button>
          </div> 
          <div v-else>
            <p>{{`${record.work.review_time}老师完成批改`}}</p>
            <a-button @click="clickChange(record.work)">查看详情</a-button>
          </div>
        </div>
      </template>
    </a-table>
    <a-modal :visible="visible" @cancel="visible = false" okText="确定" cancelText="取消">
      <h4>批改意见</h4>
      <!-- 如果老师有评语 就显示评语 -->
      <p v-if="work_data.teacher_review ">{{ work_data.teacher_review }}</p>
      <!-- 如果老师有上传附件 就显示下载按钮 -->
      <p v-if="work_data.teacher_upload_name">
        <a :href="`${downloadPost}?id=${work_data.id}&type=teacher`">
          <a-button icon="download">附件</a-button>
        </a>
      </p>
    </a-modal>
  </div>
</template>
<script>
const Post = "http://sandbox_api.estudy.chanke.xyz";
import { mapState } from "vuex";
const work_status = {
  "0": "待批改",
  "1": "需完善",
  "2": "已完成"
};
export default {
  name: "stduent",
  props: {
    stduent: Object
  },
  computed: {
    ...mapState("User", ["info"])
  },
  data() {
    return {
      visible: false,
      work_data: {},
      uploadPost: Post + "/student/upload",
      downloadPost: Post + "/student/download",
      columns: [
        {
          title: "课程",
          dataIndex: "org_name"
        },
        {
          title: "作业名称",
          dataIndex: "name"
        },
        {
          title: "开始-截至时间",
          customRender(text, record) {
            return `${record.start_time}~${record.end_time}`;
          }
        },
        {
          title: "操作",
          scopedSlots: {
            customRender: "operation"
          }
        },
        {
          title: "状态",
          customRender(text, record) {
            return record.work ? work_status[record.work.status] : "未提交";
          }
        },
        {
          title: "信息",
          scopedSlots: {
            customRender: "info"
          }
        }
      ]
    };
  },
  methods: {
    handleChange(info) {
      console.log(info);
      if (info.file.status === "done" && info.file.response.data) {
        this.$message.success(`${info.file.name}上传成功`);
      } else if (info.file.status === "error") {
        this.$notification.error({
          message: "上传失败",
          description: info.file.response.errorMessage
        });
      }
    },
    clickChange(data) {
      this.visible = true;
      this.work_data = data;
    }
  }
};
</script>