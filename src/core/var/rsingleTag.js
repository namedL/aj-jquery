define( function() {

	// Match a standalone tag
	// 匹配单标签
	return ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );
} );
