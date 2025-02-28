<template>
  <div class="login-container">
    <main class="login-wrap">
      <strong :data-version="curVersion">User Login</strong>

      <!-- login form -->
      <el-form ref="loginFormRef" :model="formField" :rules="loginRules" size="large" label-position="left" label-width="0">
        <el-tabs type="border-card">
          <el-tab-pane label="Account Login">
            <el-form-item label="User Account" prop="userAccount">
              <el-input v-model="formField.userAccount" type="text" maxlength="18" placeholder="Account" />
            </el-form-item>

            <el-form-item label="User Password" prop="userPassword">
              <el-input v-model="formField.userPassword" type="password" maxlength="50" placeholder="Password" />
            </el-form-item>

            <el-form-item label="">
              <el-button type="primary" size="large" class="login-btn" @click="onLogin()">Login</el-button>
            </el-form-item>
          </el-tab-pane>

          <el-tab-pane label="SMS Login">
            <el-form-item label="Mobile Phone" prop="userPhone">
              <el-input v-model="formField.userPhone" type="text" maxlength="11" placeholder="Mobile Phone" @input="onHandlePhone">
                <template #append>
                  <el-button type="primary" @click="onSendSMSCode(formField.userPhone)">Send Code</el-button>
                </template>
              </el-input>
            </el-form-item>

            <el-form-item label="Phone Code" prop="phoneMessage">
              <el-input v-model="formField.phoneMessage" maxlength="8" placeholder="Verify Code" />
            </el-form-item>

            <el-form-item label="">
              <el-button type="primary" size="large" class="login-btn" @click="onLogin()">Login</el-button>
            </el-form-item>
          </el-tab-pane>

          <el-tab-pane label="E-Mail Login">
            <el-form-item label="E-Mail Addr" prop="eMail">
              <el-input v-model="formField.eMail" type="text" maxlength="50" placeholder="E-Mail" @input="onHandleMail">
                <template #append>
                  <el-select
                    v-model="formField.domain"
                    filterable
                    allow-create
                    default-first-option
                    :reserve-keyword="false"
                    placeholder="Choose Domain"
                  >
                    <el-option v-for="item in domainList" :key="item?.value" :label="item?.label" :value="item?.value" />
                  </el-select>
                </template>
              </el-input>
            </el-form-item>

            <el-form-item label="Email Code" prop="verifyCode">
              <el-input v-model="formField.verifyCode" maxlength="8" placeholder="Email Code">
                <template #append>
                  <el-button type="primary" @click="onSendEmailCode(formField)">Send Email</el-button>
                </template>
              </el-input>
            </el-form-item>

            <el-form-item label="">
              <el-button type="primary" size="large" class="login-btn" @click="onLogin()">Login</el-button>
            </el-form-item>
          </el-tab-pane>
        </el-tabs>

        <!-- <div class="operate-wrap">
          <el-button type="primary" size="large" class="login-btn" @click="onLogin()">Login</el-button>
        </div> -->
      </el-form>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const curVersion = ref('')

const formField = reactive({
  userAccount: '',
  userPassword: '',
  userPhone: '',
  phoneMessage: '',
  eMail: '',
  verifyCode: '',
  domain: '.com'
})

const loginRules = reactive({
  userAccount: [{ required: true, message: 'Please Input Text', trigger: 'blur' }],
  userPassword: [{ required: true, message: 'Please Input Password', trigger: 'blur' }],
  userPhone: [{ required: true, message: 'Please Input Phone Number', trigger: 'blur' }],
  phoneMessage: [{ required: true, message: 'Please Input Code', trigger: 'blur' }],
  eMail: [{ required: true, message: 'Please Input Email addr', trigger: 'blur' }],
  verifyCode: [{ required: true, message: 'Please Input Code', trigger: 'blur' }]
})

const domainList = reactive([
  { label: '.com', value: '.com' },
  { label: '.cn', value: '.cn' },
  { label: '.org', value: '.org' }
])

function onLogin() {
  console.log('login')
}

function onHandlePhone(phone: string) {
  console.log('phone', phone)
  if (!phone) {
    return false
  }
  formField.userPhone = phone?.replace(/\D/g, '')
}

function onHandleMail(mail: string) {
  console.log('eMail', mail)
}

function onSendSMSCode(phone: string) {
  console.log('Phone Code', phone)
}

function onSendEmailCode(formField: object) {
  console.log('email', formField)
}
</script>
