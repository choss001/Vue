
export default {
  User: [
    {
      user_id: 1,
      name: 'lelana',
      created_at: '2018-09-11 11:42:11'
    },
    {
      user_id: 2,
      name: '그램',
      created_at: '2018-09-11 11:42:11'
    },
    {
      user_id: 3,
      name: '조성식',
      created_at: '2018-09-11 11:42:11'
    },
  ],
  Content: [
    {
      content_id: 1,
      user_id: 1,
      title: '유투브 강의 개꿀',
      context: '아직 미정입니다.',
      created_at: '2019-01-01 13:11:42',
      updated_at: null
    },
    {
      content_id: 2,
      user_id: 3,
      title: 'ㅎㅎㅎㅎㅎㅎ',
      context: '화이팅!',
      created_at: '2019-01-02 13:11:42',
      updated_at: null
    },
    {
      content_id: 3,
      user_id: 2,
      title: '생일 축하해주신 여러분 감사합니다!',
      context: '^^',
      created_at: '2019-03-29 13:11:42',
      updated_at: null
    }
  ],
  Comment: [
    {
      comment_id: 1,
      user_id: 1,
      content_id: 3,
      context: '생일 축하해요!',
      created_at: '2019-03-29 14:11:11',
      updated_at: null
    },
    {
      comment_id: 2,
      user_id: 3,
      content_id: 3,
      context: 'ㅇㅇㅇ생일 축하해요!',
      created_at: '2019-03-29 16:11:11',
      updated_at: null
    },
    {
      comment_id: 3,
      user_id: 2,
      content_id: 1,
      context: '강의 잘 보고 있습니다 ^^',
      created_at: '2019-03-29 14:11:11',
      updated_at: null
    }
  ],
  SubComment: [
    {
      subcomment_id: 1,
      comment_id: 3,
      user_id: 1,
      context: 'ㅋㅋㅋㅋ님이 직접 댓글을 달아주시다니 ㅠㅠ 영광입니다!!',
      created_at: '2019-03-29 16:22:11',
      updated_at: null
    }
  ]
}
