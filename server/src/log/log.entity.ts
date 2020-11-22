import { Action } from "src/graphql";
import { ClassEntity } from "src/class/class.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FolderEntity } from "src/folder/folder.entity";
import { SetEntity } from "src/set/set.entity";
import { UserEntity } from "src/user/user.entity";

@Entity({ name: "logs" })
export class LogEntity {
  @PrimaryGeneratedColumn()
  id: string
  @ManyToOne(() => UserEntity, user => user.id, { eager: true })
  user: UserEntity
  @ManyToOne(() => SetEntity, set => set.id, { eager: true })
  set: SetEntity
  @ManyToOne(() => FolderEntity, folder => folder.id, { eager: true })
  folder: FolderEntity
  @ManyToOne(() => ClassEntity, class_ => class_.id, { eager: true })
  class: ClassEntity
  @ManyToOne(() => UserEntity, user => user.id, { eager: true })
  member: UserEntity
  @CreateDateColumn()
  date: Date
  @Column()
  action: Action

  getUserLog(): string {
    const localDate = this.date.toLocaleDateString().split("/");
    const day = localDate[1];
    const month = localDate[0];
    const year = localDate[2];
    const hour = this.date.getHours();
    const minutes = this.date.getMinutes();

    const time = `lúc ${hour}:${minutes} ngày ${day}-${month}-${year}.`

    const log = `Người dùng ${this.user.name} `;

    let action: string;
    let verb: string;

    switch (this.action) {
      case Action.REGISTER:
        {
          return log + `tạo tài khoản ${time}`;
        }
      case Action.LOGIN:
        {
          return log + `đăng nhập ${time}`;
        }
      case Action.LOGIN:
        {
          return log + `đăng xuất ${time}`;
        }
      case Action.CREATE:
      case Action.UPDATE:
      case Action.DELETE:
        {
          if (!this.set && !this.folder && !this.class) {
            action = " thông tin "
          } else if (!this.folder && !this.class) {
            action = ` set ${this.set.title} `
          } else if (!this.set && !this.class) {
            action = ` folder ${this.folder.title} `
          } else if (!this.set && !this.folder) {
            action = ` lớp ${this.class.className} `;
          }
          verb = this.action == Action.CREATE ? "tạo" : this.action == Action.UPDATE ? "cập nhật" : "xóa";
          return log + verb + action + time;
        }
      case Action.ADD:
      case Action.REMOVE:
      case Action.CHANGE_ROLE:
        {
          let object1: string;
          let object2: string;
          if (this.set && this.folder && !this.class && !this.member) {
            object1 = ` set ${this.set.title} `
            object2 = ` folder ${this.folder.title} `;
          } else if (this.set && !this.folder && this.class && !this.member) {
            object1 = ` set ${this.set.title} `
            object2 = ` lớp ${this.class.className} `;
          } else if (!this.set && this.folder && this.class && !this.member) {
            object1 = ` folder ${this.folder.title} `
            object2 = ` lớp ${this.class.className} `;
          } else if (!this.set && !this.folder && this.class && this.member) {
            object1 = ` thành viên ${this.member.name} `
            object2 = ` lớp ${this.class.className} `;
          }
          verb = this.action == Action.REMOVE ? "xóa" : this.action == Action.ADD ? "thêm" : "thay đổi quyền của";
          const sub = this.action == Action.REMOVE ? "khỏi" : this.action == Action.ADD ? "vào" : "trong";

          return log + verb + object1 + sub + object2 + time;
        }
      default:
        {
          return "";
        }
    }
  }
}
