## usersテーブル
***
| Column     | Type        |      Options                   |
|:-----------|------------:|:------------------------------:|
| name       | string      | null: false, unique: true      |
| email      | string      | null: false, unique: true      |
| password   | string      | null: false, unique: true      |


### Association
- has_many :groups, through: :groups_users
  has_many :groups_users
- has_many :posts

## postsテーブル
***
| Column     | Type        |      Options                   |
|:-----------|------------:|:------------------------------:|
| text       | text        |                                |
| image      | text        |                                |
| user_id    | integer     | null: false, foreign_key: true |
| group_id   | integer     | null: false, foreign_key: true |

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
***
| Column     | Type        |      Options                   |
|:-----------|------------:|:------------------------------:|
| name       | string      | null: false, unique: true      |

### Association
- has_many :users, through: :groups_users
- has_many :groups_users
- has_many :posts

## groups_usersテーブル
***
| Column     | Type        |      Options                   |
|:-----------|------------:|:------------------------------:|
| group_id   | integer      | null: false, foreign_key: true |
| user_id    | integer      | null: false, foreign_key: true |

### Association
- belongs_to :user
- belongs_to :group