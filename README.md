## usersテーブル
***
| Column     | Type        |      Options              |
|:-----------|------------:|:-------------------------:|
| name       | string      | null: false, unique: true |
| email      | string      | null: false, unique: true |
| password   | string      | null: false, unique: true |

### Association
- has_many :groups
- has_many :posts

## postsテーブル
***
| Column     | Type        |      Options                |
|:-----------|------------:|:---------------------------:|
| text       | text        | null: false,                   |
| user_id    | string      | null: false, foreign_key: true |

### Association
- belong_to :user

## groupsテーブル
***
| Column     | Type        |      Options              |
|:-----------|------------:|:-------------------------:|
| group_name | string      | null: false, unique: true |

### Association
- has_many :users

## group_usersテーブル
***
| Column     | Type        |      Options                   |
|:-----------|------------:|:------------------------------:|
| group_id   | string      | null: false, foreign_key: true |
| user_id    | string      | null: false, foreign_key: true |

### Association
- has_many :users
- has_many :groups