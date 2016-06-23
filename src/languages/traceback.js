/*
Language: traceback
*/


function(hljs) {
  return {
    keywords: 'ERROR WARNING',
    contains: [
      {
        className: 'error',
        begin: '\\d{4}-\\d{2}-\\d{2}\\s+\\d{2}:\\d{2}:\\d{2}\\s+ERROR.*'
      },
      {
        className: 'info',
        begin: 'INFO'
      },
      {
        className: 'datetime',
        begin: '\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}'
      },
      {
        className: 'warning',
        begin: 'WARNING'
      }
    ]
  };
}
