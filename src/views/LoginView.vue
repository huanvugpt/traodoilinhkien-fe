<template>
  <div class="w-full h-screen flex items-center justify-center bg-gray-100">
    <n-card
      style="width: 400px"
      class="rounded-2xl shadow-xl"
    >
      <n-tabs
        type="line"
        animated
        v-model:value="tab"
      >
        <n-tab-pane
          name="login"
          tab="Đăng nhập"
        >
          <n-form
            :model="loginForm"
            :rules="rules"
            ref="loginFormRef"
          >
            <n-form-item
              label="Email"
              path="email"
            >
              <n-input
                v-model:value="loginForm.email"
                placeholder="Email"
              />
            </n-form-item>
            <n-form-item
              label="Mật khẩu"
              path="password"
            >
              <n-input
                type="password"
                v-model:value="loginForm.password"
                placeholder="Mật khẩu"
              />
            </n-form-item>
            <n-button
              type="primary"
              block
              @click="handleLogin"
              >Đăng nhập</n-button
            >
          </n-form>

          <div class="flex justify-center gap-3 mt-3">
            <button
              class="flex items-center px-3 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 text-sm"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <!-- icon FB -->
                <path
                  d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.878C18.343 21.128 22 16.991 22 12z"
                />
              </svg>
              Facebook
            </button>
            <button
              class="flex items-center px-3 py-2 text-white bg-red-600 rounded hover:bg-red-700 text-sm"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <!-- icon Google -->
                <path
                  d="M21.35 11.1H12v2.8h5.35c-.23 1.2-.93 2.2-1.98 2.9v2.4h3.2c1.87-1.7 2.95-4.2 2.95-7.1 0-.7-.07-1.4-.17-2z"
                />
                <path
                  d="M12 22c2.7 0 4.96-.9 6.6-2.4l-3.2-2.4c-.9.6-2.1.9-3.4.9-2.6 0-4.8-1.7-5.6-4.1H3.1v2.6C4.7 19.6 8.1 22 12 22z"
                />
                <path
                  d="M6.4 13.9c-.2-.6-.4-1.3-.4-1.9s.1-1.3.4-1.9V7.5H3.1C2.4 8.9 2 10.4 2 12s.4 3.1 1.1 4.5l3.3-2.6z"
                />
                <path
                  d="M12 5.5c1.5 0 2.8.5 3.8 1.4l2.8-2.8C17 2.5 14.7 1.5 12 1.5 8.1 1.5 4.7 3.9 3.1 7.5l3.3 2.6c.8-2.4 3-4.1 5.6-4.1z"
                />
              </svg>
              Google
            </button>
          </div>
        </n-tab-pane>

        <n-tab-pane
          name="register"
          tab="Đăng ký"
        >
          <n-form
            :model="registerForm"
            :rules="rules"
            ref="registerFormRef"
          >
            <n-form-item
              label="Email"
              path="email"
            >
              <n-input
                v-model:value="registerForm.email"
                placeholder="Email"
              />
            </n-form-item>
            <n-form-item
              label="Mật khẩu"
              path="password"
            >
              <n-input
                type="password"
                v-model:value="registerForm.password"
                placeholder="Mật khẩu"
              />
            </n-form-item>
            <n-button
              type="primary"
              block
              @click="handleRegister"
              >Đăng ký</n-button
            >
          </n-form>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMessage } from 'naive-ui'

const tab = ref('login')
const message = useMessage()

const loginForm = ref({
  email: '',
  password: '',
})

const registerForm = ref({
  email: '',
  password: '',
})

const rules = {
  email: {
    required: true,
    message: 'Email không được để trống',
    trigger: ['blur', 'input'],
  },
  password: {
    required: true,
    message: 'Mật khẩu không được để trống',
    trigger: ['blur', 'input'],
  },
}

const loginFormRef = ref(null)
const registerFormRef = ref(null)

const handleLogin = () => {
  loginFormRef.value?.validate((errors) => {
    if (!errors) {
      message.success('Đăng nhập thành công (fake)')
      // call API login here
    }
  })
}

const handleRegister = () => {
  registerFormRef.value?.validate((errors) => {
    if (!errors) {
      message.success('Đăng ký thành công (fake)')
      // call API register here
    }
  })
}

const loginWith = (provider) => {
  message.info(`Đang đăng nhập với ${provider}...`)
  // redirect to OAuth provider
}
</script>

<style scoped>
.n-card {
  padding: 24px;
}
</style>
