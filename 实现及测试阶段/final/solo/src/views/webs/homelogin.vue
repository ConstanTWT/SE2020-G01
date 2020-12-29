
<template>
    <div align="center">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>登录</span>
            </div>
            <div class="text item">
                <el-form :inline="true" v-model="user" class="demo-form-inline">
                    <el-form-item label="账号">
                        <el-input v-model="user.name" placeholder="账号"></el-input>
                    </el-form-item>
                    <br>
                    <el-form-item label="密码">
                        <el-input v-model="user.pwd"  type="password" placeholder="密码"></el-input>
                    </el-form-item>
                    <br>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>

    </div>
</template>

<script>

    export default {
        name: 'home',
        data() {
            return {
                user: {}
            }
        },
        methods: {
            async onSubmit() {
                let {data} = await this.$http.post("/login", this.user);
                //后台定义 返回数据 ok == 登录成功 no == 登录失败
                if (data == "ok") {
                    this.$message('恭喜你登录成功！');
                } else {
                    this.$message.error('登录失败！');
                }
            }
        }

    }
</script>
<style>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {

        width: 480px;
    }
</style>

