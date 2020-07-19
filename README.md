## usersテーブル
***
| Column     | Type        |      Options                   |
|:-----------|------------:|:------------------------------:|
| name       | string      | null: false, unique: true      |
| email      | string      | null: false, unique: true      |
| group_id   | string      | null: false, foreign_key: true |

### Association
- has_many :groups through: :groups_users
  has_many :groups
- has_many :posts

## postsテーブル
***
| Column     | Type        |      Options                   |
|:-----------|------------:|:------------------------------:|
| text       | text        | null: false,                   |
| user_id    | string      | null: false, foreign_key: true |
| group_id   | string      | null: false, foreign_key: true |

### Association
- belong_to :user
- belong_to :group

## groupsテーブル
***
| Column     | Type        |      Options                   |
|:-----------|------------:|:------------------------------:|
| group_name | string      | null: false, unique: true      |
| user_id    | string      | null: false, foreign_key: true |

### Association
- has_many :users through: :groups_users
- has_many :users
- has_many :posts

## groups_usersテーブル
***
| Column     | Type        |      Options                   |
|:-----------|------------:|:------------------------------:|
| group_id   | string      | null: false, foreign_key: true |
| user_id    | string      | null: false, foreign_key: true |

### Association
- belongs_to :user
- belongs_to :group