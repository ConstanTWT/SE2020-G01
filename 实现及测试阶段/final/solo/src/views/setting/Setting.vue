<template>
	<div class="setting">
		<h1 class="title">设置</h1>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="username" label="姓名" width="180"></el-table-column>
			<el-table-column prop="email" label="邮箱" width="180"></el-table-column>
<!-- 			<el-table-column>
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
				</template>
			</el-table-column> -->
		</el-table>
		<h2>给系统的意见</h2>
		<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
		 :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
			<img v-if="imageUrl" :src="imageUrl" class="avatar">
			<i v-else class="el-icon-plus avatar-uploader-icon"></i>
		</el-upload>
		<br />
		<br />
		<br />
		<h4 style="font-size: 20px;color:#817b7c ;">后台管理联系方式</h4>
		<div style="padding: 20px; text-align: center">
			<img src="@/assets/QQ.jpg" alt height="150px"/>
			<img src="@/assets/WX.jpg" alt height="150px" />
		</div>
	</div>
</template>

<script>
	import axios from "../../axios.js";
	export default {
		name: "Setting",
		data() {
			return {
				tableData: [],
				imageUrl: ''
			};
		},
		created() {
			// this.getAllUser()
		},
		methods: {
			getAllUser() {
				axios.getAllUser().then(res => {
					console.log(res);
					if (res.status === 200 && res.data && res.data.code === 0) {
						this.tableData = res.data.result;
					} else {
						this.$notify({
							title: "错误",
							message: res.data.msg,
							duration: 2000,
							type: "error"
						});
					}
				});
			},
			handleClick(e) {
				console.log(e.username);
				axios
					.delUser({
						username: e.username
					})
					.then(res => {
						if (res.status === 200 && res.data && res.data.code === 0) {
							this.$notify({
								title: "成功",
								message: res.data.msg,
								duration: 2000,
								type: "error"
							});
							this.tableData = this.tableData.filter(
								val => val.username !== e.username
							);
						} else {
							this.$notify({
								title: "错误",
								message: res.data.msg,
								duration: 2000,
								type: "error"
							});
						}
					});
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			}
		}
	};
</script>

<style lang="stylus">
	.setting {
		background: #fff;
		padding: 20px;
		max-width: 1100px;
		margin: 0 auto;

		.title {
			font-size: 28px;
			padding: 0 0 30px 0;
		}
	}

	.avatar-uploader .el-upload {
		border: 6px dashed #d9d9d9;
		border-radius: 10px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		margin-left 460px;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #ffff00;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
	h2{
		color #817b7c;
		font-size 20px;
		margin-left 10px;
		padding-top 50px;
	}
</style>
